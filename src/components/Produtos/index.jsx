import { Container } from './style'

export function Produtos() {
  return (
    <Container>
      <h1>Produtos</h1>
      <ul>
        <li>
          <span>Nome</span>
          <span>Descrição</span>
          <span>Preço</span>
          <span>Quantidade</span>
          <button type="button">Editar</button>
          <button type="button">Excluir</button>
        </li>
        <li>
          <span>Nome</span>
          <span>Descrição</span>
          <span>Preço</span>
          <span>Quantidade</span>
          <button type="button">Editar</button>
          <button type="button">Excluir</button>
        </li>
        <li>
          <span>Nome</span>
          <span>Descrição</span>
          <span>Preço</span>
          <span>Quantidade</span>
          <button type="button">Editar</button>
          <button type="button">Excluir</button>
        </li>
      </ul>
    </Container>
  )
}
