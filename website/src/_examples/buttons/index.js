import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "brace";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import { Button, solarizedDarkTheme, whiteTheme, blackTheme } from "edikit";

injectGlobal`
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* { box-sizing: border-box; }
`;

const Container = styled.div`
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.typography.default.fontFamily};
    font-size: ${props => props.theme.typography.fontSize};
    line-height: ${props => props.theme.typography.lineHeight};
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 12px;
    grid-row-gap: 12px;
    padding: 32px;
`;

const App = () => (
    <Fragment>
        <ThemeProvider theme={solarizedDarkTheme}>
            <Container>
                <Button>default</Button>
                <Button variant="primary">primary</Button>
                <Button variant="success">success</Button>
                <Button variant="warning">primary</Button>
                <Button variant="danger">danger</Button>
            </Container>
        </ThemeProvider>
        <ThemeProvider theme={whiteTheme}>
            <Container>
                <Button>default</Button>
                <Button variant="primary">primary</Button>
                <Button variant="success">success</Button>
                <Button variant="warning">primary</Button>
                <Button variant="danger">danger</Button>
            </Container>
        </ThemeProvider>
        <ThemeProvider theme={blackTheme}>
            <Container>
                <Button>default</Button>
                <Button variant="primary">primary</Button>
                <Button variant="success">success</Button>
                <Button variant="warning">primary</Button>
                <Button variant="danger">danger</Button>
            </Container>
        </ThemeProvider>
    </Fragment>
);

ReactDOM.render(<App />, document.getElementById("root"));
