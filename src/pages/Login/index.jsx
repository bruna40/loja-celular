import { Container, ContainerForm } from './style'

export function Login() {
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

      <a href="/registro">Registrar-se</a>
    </Container>
  )
}
