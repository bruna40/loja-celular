import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      input {
        padding: 0.5rem;
        border: 1px solid #000;
        border-radius: 0.25rem;
      }

      button {
        padding: 0.5rem;
        border: 1px solid #000;
        border-radius: 0.25rem;
      }
    }
  }
`
export const ContainerSearch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  input {
    padding: 0.5rem;
    border: 1px solid #000;
    border-radius: 0.25rem;
  }

  button {
    padding: 0.5rem;
    border: 1px solid #000;
    border-radius: 0.25rem;
  }
`
export const ContainerRegistro = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  form {
    display: flex;
    flex-direction: row;
    gap: 1rem;

    label {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      input {
        padding: 0.5rem;
        border: 1px solid #000;
        border-radius: 0.25rem;
      }
    }

    button {
      padding: 0.5rem;
      border: 1px solid #000;
      border-radius: 0.25rem;
    }
  }
`
