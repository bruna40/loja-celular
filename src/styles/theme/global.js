import { createGlobalStyle } from 'styled-components'
import { fonts } from '../typography'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0 ;
        box-sizing: border-box;
        
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['base-hover']};
    }

    body {
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme['base-text']};

        -webkit-font-smoothing: antialiased;
    }

    body, input ,textarea, button {
        ${fonts.textM}
    }

    button {
        border: none;
        cursor: pointer;
    }
`
