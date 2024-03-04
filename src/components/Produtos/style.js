import styled from 'styled-components'
// import { fonts } from '../../styles/typography'

export const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  ul {
    display: flex;
    gap: 1rem;
    justify-content: center;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      padding: 1rem;
      border: 1px solid #000;
      width: 200px;
      height: 200px;
      text-align: center;
    }
  }
`
