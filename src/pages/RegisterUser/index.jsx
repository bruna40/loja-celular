import { Container, ContainerForm } from './style'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import axios from '../../api/axios'
import {
  ToastNotification,
  showSuccessToast,
  showErrorToast,
} from '../../utils/toast-notification'
import { Link, useNavigate } from 'react-router-dom'

export function Registro() {
  const {
    handleSubmit,

    formState: { errors },
  } = useForm()
  const navigate = useNavigate()

  const handleChange = (fieldName, value) => {
    setDataForm((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }))
  }
  const [dataForm, setDataForm] = useState({
    name: '',
    email: '',
    password: '',
  })

  const onSubmit = () => {
    axios
      .post('/users', {
        name: dataForm.name,
        email: dataForm.email,
        password: dataForm.password,
      })
      .then(() => {
        console.log('Success')
        setDataForm({
          name: '',
          email: '',
          password: '',
        })
        showSuccessToast('Cadastro realizado com sucesso')
        navigate('/')
      })
      .catch((error) => {
        showErrorToast('Ops alguma coisa deu errado, email já cadastrado !')
        console.error(error)
      })
  }

  return (
    <Container>
      <h1>Registro</h1>
      <ContainerForm onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            placeholder="Nome"
            id="name"
            value={dataForm.name}
            onChange={(e) => handleChange('name', e.target.value)}
          />
        </label>
        {errors.name && errors.name.type === 'pattern' && (
          <p className="text-center text-xs font-bold text-red-600">
            Nome inválido
          </p>
        )}
        <label htmlFor="email">
          Email
          <input
            type="text"
            placeholder="Email"
            id="email"
            value={dataForm.email}
            onChange={(e) => handleChange('email', e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            placeholder="Senha"
            id="password"
            value={dataForm.password}
            onChange={(e) => handleChange('password', e.target.value)}
          />
        </label>
        <button>Cadastrar</button>
      </ContainerForm>
      <ToastNotification />
      <Link to="/">Login</Link>
    </Container>
  )
}
