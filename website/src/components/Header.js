import React from 'react'
import styled from 'styled-components'
import { StaticQuery, Link, graphql } from 'gatsby'
import { rhythm } from '../utils/typography'

const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    z-index: 1000000;
    height: ${rhythm(2)};
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #255fbc;
    padding: 0 ${rhythm(1)};
`

const Nav = styled.nav`
    display: flex;
    align-items: center;
`

const Project = styled(Link)`
    color: #fff;
    font-weight: bolder;
`

const HeaderLinkBase = tag => styled(tag)`
    color: #fff;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: bold;
    margin-left: 16px;
`

const HeaderLink = HeaderLinkBase(Link)
const HeaderExtLink = HeaderLinkBase('a')

export default () => (
    <StaticQuery
        query={graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }`}
        render={data => (
            <Wrapper>
                <Project to={`/`}>
                    {data.site.siteMetadata.title}
                </Project>
                <Nav>
                    <HeaderLink
                        to="/docs/getting-started/installation/"
                    >
                        Docs
                    </HeaderLink>
                    <HeaderLink
                        to="/showcase/"
                    >
                        Showcase
                    </HeaderLink>
                    <HeaderExtLink
                        href="https://github.com/plouc/edikit"
                        target="_blank"
                    >
                        GitHub
                    </HeaderExtLink>
                </Nav>
            </Wrapper>
        )}
    />
)
