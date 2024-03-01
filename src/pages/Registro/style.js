import styled from 'styled-components'
// import { fonts } from '../../styles/typography'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 1rem;
`
export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
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
`
