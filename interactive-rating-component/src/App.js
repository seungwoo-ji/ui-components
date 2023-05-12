import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap');

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

    display: grid;
    place-items: center;
    min-height: 100vh;
    min-height: 100svh;
    font-family: 'Overpass', sans-serif;
    padding: 1.5em;
    background-color: var(--bg-color);
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
    </>
  );
};

export default App;
