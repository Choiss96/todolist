import React, { Fragment } from "react";
import styled, { createGlobalStyle } from "styled-components";

import TodoTemplate from "./components/TodoTemplate";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Container>
        <TodoTemplate />
      </Container>
    </Fragment>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #848484;
    color: black;
    border-color: aquamarine;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
`;

export default App;
