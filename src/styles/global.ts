import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --grey-menu: #323233;

        --black-main-text: #1d1d1f;
        --white-main-text: #f5f5f7;
        
        --white-bg: #fbfbfb;
        --black-bg: #000000;
        
        --grey-footer: var(--white-main-text);
        --footer-normal-text: #89898c;
        --footer-titles-text: #555558;

        --links: #06c;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        
        @media (max-width: 720px) {
            foont-size: 87.5%
        }
    }

    body {
        background: var(--white-bg);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 400;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

