import { Container, ContainerForm } from './style'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import axios from '../../api/axios'
import {
  ToastNotification,
  showErrorToast,
  showSuccessToast,
} from '../../utils/toast-notification'
import { InputPassword } from '../../components/InputPassword'
import { FaSpinner } from 'react-icons/fa'

export function Login() {
  const [dataForm, setDataForm] = useState({
    email: '',
    password: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()
  const handleChange = (fieldName, value) => {
    setDataForm((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }))
  }

  const onSubmit = () => {
    setSubmitting(true)
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
        setSubmitting(false)
      })
      .catch((error) => {
        showErrorToast(
          'Ops! Alguma coisa deu errado. Verifique seu email ou senha.',
        )
        console.error(error)
        setSubmitting(false)
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
            required
          />
        </label>
        <InputPassword
          value={dataForm.password}
          onChange={(e) => handleChange('password', e.target.value)}
          placeholder="Senha"
          htmlFor="password"
          id="password"
        />
        <button type="button" onClick={onSubmit}>
          {submitting ? <FaSpinner className="spinner" /> : 'Entrar'}
        </button>
      </ContainerForm>
      <span>
        Ainda não se inscreveu? <Link to="/registro">Inscreva-se</Link>
      </span>

      <ToastNotification />
    </Container>
  )
}
