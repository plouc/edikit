import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { blackTheme, solarizedDarkTheme, whiteTheme } from 'edikit'

const themes = {
    black: blackTheme,
    solarizedDark: solarizedDarkTheme,
    white: whiteTheme,
}

const Header = styled.div`
    height: 36px;
    display: flex;
    justify-content: flex-start;
    padding: 0 18px;
    align-items: center;
    font-size: 13px;
    border-radius: 3px 3px 0 0;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
`

const ThemeLabel = styled.span`
    height: 36px;
    margin-right: 12px;
    cursor: pointer;
    color: ${props => props.theme.colors.text};
    display: flex;
    align-items: center;
`

const ThemeButton = styled.span`
    height: 36px;
    position: relative;
    display: flex;
    align-items: center;
    margin-right: 12px;
    cursor: pointer;
    color: ${props => props.isActive ? props.theme.colors.text : props.theme.colors.muted};

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
    background: ${props => props.usePaneBackground ? props.theme.pane.body.background : props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    overflow: hidden;
    padding: ${props => props.disableContentPadding ? 0 : '16px 12px 16px 12px'};
    border-radius: 0 0 3px 3px;
`

export default class ThemableDemo extends React.Component {
    static defaultProps = {
        usePaneBackground: false,
        disableContentPadding: false,
    }

    constructor(props) {
        super(props)

        this.state = { theme: 'white' }
    }

    setTheme = theme => {
        this.setState({ theme })
    }

    render() {
        const { usePaneBackground, disableContentPadding} = this.props
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
                    <Container
                        usePaneBackground={usePaneBackground}
                        disableContentPadding={disableContentPadding}
                    >
                        {this.props.children}
                    </Container>
                </div>
            </ThemeProvider>
        )
    }
}
