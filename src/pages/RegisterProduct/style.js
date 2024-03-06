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

    margin-top: 1rem;
  }

  main {
    flex: 1;
    padding: 3.5rem;

    display: flex;
    flex-direction: column;
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
`
export const ContainerRegistro = styled.div`
  display: flex;
  flex-direction: column;
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
      margin-top: 1.5rem;
      width: 10rem;
      height: 2.7rem;
      border: none;
      border-radius: 8px;
      padding: 1rem;

      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${({ theme }) => theme['gray-600']};

      gap: 0.5rem;
      font-weight: bold;
      color: ${({ theme }) => theme['gray-300']};

      cursor: pointer;
    }
  }
`
