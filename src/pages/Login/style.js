import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 0.5rem;
  color: ${({ theme }) => theme['gray-100']};

  font-size: 1.125rem;
  font-weight: bold;
`

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 2rem;
  @media (min-width: 40em) {
    width: 50%;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  input {
    background: transparent;
    height: 2.5rem;
    border: 0;
    border-bottom: 2px solid ${({ theme }) => theme['gray-500']};
    font-weight: bold;
    font-size: 1.125rem;
    padding: 0 0.5rem;
    color: ${({ theme }) => theme['gray-100']};

    &:focus {
      box-shadow: none;
      border-color: ${({ theme }) => theme['green-500']};
    }

    &::placeholder {
      color: ${({ theme }) => theme['gray-500']};
    }
  }

  button {
    width: 100%;
    border: none;
    border-radius: 8px;
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;
    font-weight: bold;
    background-color: ${({ theme }) => theme['gray-300']};
    color: ${({ theme }) => theme['gray-700']};

    cursor: pointer;
  }
`
