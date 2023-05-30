import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Feedback from './components/Feedback';
import theme from './components/theme';

const GlobalStyle = createGlobalStyle`

  *, *:before, *:after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    font: inherit;
  }

  img, picture, svg, video {
    display: block;
    max-width: 100%;
  }

  body {
    --bg-color: hsl(216, 12%, 8%);

    font-family: 'Overpass', sans-serif;
    display: grid;
    place-items: center;
    min-height: 100vh;
    min-height: 100svh;
    background-color: var(--bg-color);
    padding: 1.8em;
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Feedback />
    </ThemeProvider>
  );
};

export default App;
