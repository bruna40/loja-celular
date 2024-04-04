import { Container, ContainerRegistro } from './style'
import { Produtos } from '../../components/Produtos'
import { useState, useEffect } from 'react'
import axios from '../../api/axios'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export function RegistroProduto() {
  const [userId, setUserId] = useState('')
  const localStorageToken = localStorage.getItem('acessToken')

  const tokenWithoutBearer = localStorageToken
    ? localStorageToken.replace('Bearer ', '')
    : ''

  const navigate = useNavigate()

  function decodeJWT(token) {
    if (!token) {
      console.error('Token is empty or null.')
      return null
    }

    const [, payload] = token.split('.')

    const decodedPayload = JSON.parse(window.atob(payload))

    const userId = decodedPayload.id

    return userId
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          headers: {
            Authorization: localStorageToken,
          },
        }

        const response = await axios.get('/users', config)
        const tokenDecoded = decodeJWT(tokenWithoutBearer)

        const fetchedUserId = response.data.user.find(
          (user) => user.id === tokenDecoded,
        )

        setUserId(fetchedUserId)
      } catch (error) {
        console.error('Erro ao obter o ID do usuário:', error)
      }
    }

    fetchData()
  }, [localStorageToken])

  const [dataFormProduct, setDataFormProduct] = useState({
    name: '',
    brand: '',
    model: '',
    price: '',
    color: '',
    userId: userId.id,
  })

  const { handleSubmit } = useForm()
  const handleChange = (fieldName, value) => {
    setDataFormProduct((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }))
  }

  const onCreate = () => {
    const productData = {
      ...dataFormProduct,
      userId: userId.id,
      price: parseFloat(dataFormProduct.price),
    }

    axios
      .post(`/products`, productData)
      .then(() => {
        setDataFormProduct({
          name: '',
          brand: '',
          model: '',
          price: '',
          color: '',
        })
      })
      .catch((error) => {
        console.error('Erro ao cadastrar produto:', error)
      })
  }
  const onLogout = () => {
    localStorage.removeItem('acessToken')
    navigate('/')
  }
  return (
    <Container>
      <header>
        <h1>Bem-vindo ao cadastro de Celular</h1>
        <button type="button" onClick={onLogout}>
          Logout
        </button>
      </header>
      <main>
        <ContainerRegistro>
          <h2>Registro de Produto</h2>
          <form onSubmit={handleSubmit(onCreate)}>
            <label htmlFor="name">
              Nome
              <input
                type="text"
                id="name"
                value={dataFormProduct.name}
                onChange={(e) => handleChange('name', e.target.value)}
              />
            </label>
            <label htmlFor="brand">
              Marca
              <input
                type="text"
                id="brand"
                value={dataFormProduct.brand}
                onChange={(e) => handleChange('brand', e.target.value)}
              />
            </label>
            <label htmlFor="model">
              Modelo
              <input
                type="text"
                id="model"
                value={dataFormProduct.model}
                onChange={(e) => handleChange('model', e.target.value)}
              />
            </label>
            <label htmlFor="price">
              Preço
              <input
                type="number"
                step="0.01"
                id="price"
                value={dataFormProduct.price}
                onChange={(e) => handleChange('price', e.target.value)}
              />
            </label>
            <label htmlFor="color">
              cor
              <input
                type="text"
                id="color"
                value={dataFormProduct.color}
                onChange={(e) => handleChange('color', e.target.value)}
              />
            </label>
            <button type="submit">Cadastrar</button>
          </form>
        </ContainerRegistro>
        <Produtos idProduct={userId.id} />
      </main>
    </Container>
  )
}
