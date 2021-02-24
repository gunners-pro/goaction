import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --white: #fff;
    --gray-line: #dcdde0;
    --text-highlight: #b3b9ff;
    --red: #e83f5b;
    --green: #4cd62b;
    --blue-twitter: #2aa9e0;
}

@media(max-width: 1080px){
    html {
        font-size: 93.75%;
    }
}

@media(max-width: 720px){
    html {
        font-size: 87.5%;
    }
}

body {

    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
}

body, input, textarea, button {
    font: 400 1rem 'Inter', sans-serif;
}

button {
    cursor: pointer;
}

a {
    color: inherit;
    text-decoration: none;
}
`;
