import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`

export const SectionDiv = styled.div`
  input {
    padding: 0.5rem;
    border: 1px solid #000;
    border-radius: 0.25rem;
    width: 50rem;

    &::placeholder {
      font-size: 1rem;
      color: ${({ theme }) => theme['gray-600']};
    }

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme['gray-900']};
    }
  }
`

export const Container = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  min-width: 37.5rem;
  th {
    background-color: ${({ theme }) => theme['gray-600']};
    padding: 1rem;
    text-align: left;
    color: ${({ theme }) => theme['gray-100']};
    font-size: 0.875rem;
    line-height: 1.6;

    &:first-child {
      border-top-left-radius: 0.5rem;
      padding-left: 1.5rem;
    }

    &:last-child {
      border-top-right-radius: 0.5rem;
      padding-right: 1.5rem;
    }
  }
  td {
    background-color: ${({ theme }) => theme['gray-700']};
    border-top: 4px solid ${({ theme }) => theme['gray-800']};
    padding: 1rem;
    font-size: 0.875rem;
    color: ${({ theme }) => theme['gray-100']};
    line-height: 1.6;

    &:first-child {
      width: 50%;
      padding-left: 1.5rem;
    }

    &:last-child {
      padding-right: 1.5rem;
    }
  }
  button {
    background: transparent;
    color: ${({ theme }) => theme['gray-100']};
    border: 0;
    cursor: pointer;
    transition: filter 0.2s;
    border-radius: 0.25rem;
    &:hover {
      filter: brightness(0.7);
    }
  }
`
