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
      .post('/auth/login', {
        email: dataForm.email,
        password: dataForm.password,
      })
      .then(({ data }) => {
        showSuccessToast('Login realizado com sucesso')
        const tokenHttp = `Bearer ${data.acessToken}`
        localStorage.setItem('acessToken', tokenHttp)
        navigate(`/produto/${tokenHttp}`)
      })
      .catch((error) => {
        showErrorToast(
          'Ops! Alguma coisa deu errado. Verifique seu email ou senha.',
        )
        console.error(error)
      })
  }

  return (
    <Container>
      <h1>Login</h1>
      <ContainerForm>
        <label htmlFor="email">
          <input
            type="text"
            placeholder="Email"
            id="email"
            value={dataForm.email}
            onChange={(e) => handleChange('email', e.target.value)}
          />
        </label>
        <label htmlFor="password">
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
      <span>
        Ainda não se inscreveu? <Link to="/registro">Inscreva-se</Link>
      </span>

      <ToastNotification />
    </Container>
  )
}
