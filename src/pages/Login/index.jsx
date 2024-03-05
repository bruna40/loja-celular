import { Container, ContainerForm } from './style'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from '../../api/axios'
import {
  ToastNotification,
  showErrorToast,
  showSuccessToast,
} from '../../utils/toast-notification'

export function Login() {
  const [dataForm, setDataForm] = useState({
    email: '',
    password: '',
  })
  const navigate = useNavigate()

  const handleChange = (fieldName, value) => {
    setDataForm((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }))
  }

  const onSubmit = () => {
    axios
      .get(`/users/${dataForm.email}`, {
        email: dataForm.email,
        password: dataForm.password,
      })
      .then(({ data }) => {
        if (dataForm.email === data.user.email) {
          showSuccessToast('Login realizado com sucesso')

          navigate(`/produto/${data.user.id}`)
        } else {
          showErrorToast('Ops alguma coisa deu errado, email não cadastrado !')
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <Container>
      <h1>Login</h1>
      <ContainerForm>
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
        <button type="button" onClick={onSubmit}>
          Entrar
        </button>
      </ContainerForm>

      <Link to="/registro">Registrar-se</Link>
      <ToastNotification />
    </Container>
  )
}
