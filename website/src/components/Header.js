import React from 'react'
import styled from 'styled-components'
import { StaticQuery, Link, graphql } from 'gatsby'
import { rhythm } from '../utils/typography'

const Wrapper = styled.div`
    position: fixed;
    background: blue;
    width: 100%;
    z-index: 100000;
    height: ${rhythm(2)};
    display: flex;
    align-items: center;
    background: #255fbc;
    padding: 0 ${rhythm(1)};
`

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
                <Link to={`/`}>
                    {data.site.siteMetadata.title}
                </Link>
            </Wrapper>
        )}
    />
)
