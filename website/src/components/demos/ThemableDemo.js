import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { blackTheme, solarizedDarkTheme, whiteTheme } from 'edikit'

const themes = {
    black: blackTheme,
    solarizedDark: solarizedDarkTheme,
    white: whiteTheme,
}

const Header = styled.div`
    height: 46px;
    display: flex;
    justify-content: flex-start;
    padding: 0 16px;
    align-items: center;
    font-size: 13px;
    border-radius: 3px 3px 0 0;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
`

const ThemeLabel = styled.span`
    margin-right: 12px;
    cursor: pointer;
    color: ${props => props.theme.colors.text};
    height: 22px;
`

const ThemeButton = styled.span`
    position: relative;
    margin-right: 12px;
    cursor: pointer;
    color: ${props => props.isActive ? props.theme.colors.text : props.theme.colors.muted};
    height: 22px;

    &:after {
        content: "";
        height: 2px;
        background: ${props => props.theme.colors.accent};
        bottom: 0;
        position: absolute;
        left: 0;
        right: 0;
        transition: opacity 600ms;
        opacity: ${props => props.isActive ? 1 : 0};
    }
`

const Container = styled.div`
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    overflow: hidden;
    padding: 9px 12px 22px 12px;
    border-radius: 0 0 3px 3px;
`

export default class ThemableDemo extends React.Component {
    constructor(props) {
        super(props)

        this.state = { theme: 'white' }
    }

    setTheme = theme => {
        this.setState({ theme })
    }

    render() {
        const theme = themes[this.state.theme]

        return (
            <ThemeProvider theme={theme}>
                <div>
                    <Header>
                        <ThemeLabel>
                            theme:
                        </ThemeLabel>
                        <ThemeButton
                            onClick={() => { this.setTheme('black') }}
                            isActive={this.state.theme === 'black'}
                        >
                            black
                        </ThemeButton>
                        <ThemeButton
                            onClick={() => { this.setTheme('solarizedDark') }}
                            isActive={this.state.theme === 'solarizedDark'}
                        >
                            solarized dark
                        </ThemeButton>
                        <ThemeButton
                            onClick={() => { this.setTheme('white') }}
                            isActive={this.state.theme === 'white'}
                        >
                            white
                        </ThemeButton>
                    </Header>
                    <Container>
                        {this.props.children}
                    </Container>
                </div>
            </ThemeProvider>
        )
    }
}
