import { Produtos } from '../../components/Produtos'
import { Container, ContainerSearch, ContainerRegistro } from './style'

export function RegistroProduto() {
  return (
    <Container>
      <header>
        <h1>Bem-vindo Bruna</h1>
      </header>
      <main>
        <ContainerSearch>
          <input type="text" placeholder="Pesquisar produto" />
          <button type="button">Pesquisar</button>
        </ContainerSearch>
        <ContainerRegistro>
          <h1>Registro de Produto</h1>
          <form>
            <label htmlFor="name">
              Nome
              <input type="text" />
            </label>
            <label>
              Descrição
              <input type="text" />
            </label>
            <label>
              Preço
              <input type="text" />
            </label>
            <label>
              Quantidade
              <input type="text" />
            </label>
            <button type="submit">Cadastrar</button>
          </form>
        </ContainerRegistro>
        <Produtos />
      </main>
    </Container>
  )
}
