import { Container, ContainerForm, PasswordContainer } from './style'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
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
  const [showPassword, setShowPassword] = useState(false)
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
        <PasswordContainer htmlFor="password">
          <div>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Senha"
              id="password"
              value={dataForm.password}
              onChange={(e) => handleChange('password', e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          </div>
        </PasswordContainer>
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
