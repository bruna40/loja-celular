import { Container, ContainerRegistro } from './style'
import { Produtos } from '../../components/Produtos'
import { useState, useEffect } from 'react'
import axios from '../../api/axios'
import { useForm } from 'react-hook-form'

export function RegistroProduto() {
  const [userId, setUserId] = useState('')
  const localStorageToken = localStorage.getItem('acessToken')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          headers: {
            Authorization: localStorageToken,
          },
        }

        const response = await axios.get('/users', config)
        const fetchedUserId = response.data.user[0].id
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
    userId,
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
      userId,
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

  return (
    <Container>
      <header>
        <h1>Bem-vindo ao cadastro de Celular</h1>
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
        <Produtos idProduct={userId} />
      </main>
    </Container>
  )
}
