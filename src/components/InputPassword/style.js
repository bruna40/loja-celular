import styled from 'styled-components'

export const PasswordContainer = styled.label`
  div {
    background: transparent;
    height: 2.5rem;
    border: 0;
    border-bottom: 2px solid ${(promps) => promps.theme['gray-500']};
    font-weight: bold;
    font-size: 1.125rem;
    padding: 0 0.5rem;
    color: ${(promps) => promps.theme['gray-100']};
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:focus {
      box-shadow: none;
      border-color: ${(promps) => promps.theme['green-500']};
    }

    &::placeholder {
      color: ${(promps) => promps.theme['gray-500']};
    }
    input {
      background: transparent;
      height: 2.5rem;
      border: 0;
      font-weight: bold;
      font-size: 1.125rem;
      padding: 0 0.5rem;
      color: ${(promps) => promps.theme['gray-100']};
    }

    button {
      background: transparent;
      border: none;
      color: ${(promps) => promps.theme['gray-100']};
      cursor: pointer;
      width: auto;
    }
  }
`
