import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { rhythm } from '../utils/typography'

const Container = styled.footer`
    width: 100%;
    background: #1c2738;
    color: #f7f8fd;
    border-top: 1px solid #eaecf3;
    font-size: 14px;

    a {
        color: #b6f1e2;
        font-weight: bold;
    }
`

const Inner = styled.div`
    max-width: 840px;
    margin: 0 auto;
    padding: ${rhythm(1.5)} ${rhythm(1)};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: ${rhythm(1)};
`

export default () => (
    <Container>
        <Inner>
            <div>Copyright &copy; 2018 Raphaël Benitte</div>
            <div>
                <Link to="/docs/getting-started/installation/">
                    Documentation
                </Link>
            </div>
            <div>
                <a href="https://github.com/plouc/edikit">
                    GitHub
                </a>
            </div>
        </Inner>
    </Container>
)
