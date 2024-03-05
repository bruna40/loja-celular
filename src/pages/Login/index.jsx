import { Container, ContainerForm } from './style'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export function Login() {
  const [dataForm, setDataForm] = useState({
    email: '',
    password: '',
  })

  return (
    <Container>
      <h1>Login</h1>
      <ContainerForm>
        <label htmlFor="email">
          Email
          <input type="text" placeholder="Email" id="email" />
        </label>
        <label htmlFor="password">
          Senha
          <input type="password" placeholder="Senha" id="password" />
        </label>
        <button type="submit">Entrar</button>
      </ContainerForm>

      <Link to="/registro">Registrar-se</Link>
    </Container>
  )
}
