import { Container, ContainerForm } from './style'

export function Registro() {
  return (
    <Container>
      <h1>Registro</h1>
      <ContainerForm>
        <label htmlFor="name">
          Nome
          <input type="text" placeholder="Nome" id="name" />
        </label>
        <label htmlFor="email">
          Email
          <input type="text" placeholder="Email" id="email" />
        </label>
        <label htmlFor="password">
          Senha
          <input type="password" placeholder="Senha" id="password" />
        </label>
        <button type="submit">Cadastrar</button>
      </ContainerForm>
    </Container>
  )
}
