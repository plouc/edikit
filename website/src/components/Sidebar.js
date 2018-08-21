import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { rhythm } from '../utils/typography'

const Wrapper = styled.div`
    position: fixed;
    width: calc(${rhythm(10)} - 1px);
    top: ${rhythm(2)};
    bottom: 0;
    left: 0;
    z-index: 10;
    background: #f7f8fd;
    border-right: 1px solid #eaecf3;
    padding: ${rhythm(1)} 0;
`

const SectionTitle = styled.div`
    padding-left: ${rhythm(1)};
`

const LinkItem = styled(Link)`
    display: block;
    text-decoration: none;
    color: #666;
    padding-left: ${rhythm(1.5)};
    border-right: 3px solid transparent;
    margin-right: -1px;

    &[aria-current*="page"] {
        color: #000;
        border-right-color: #417db9;
    }
`

const SubNav = styled.div`
    margin-top: ${rhythm(1/2)};
    margin-bottom: ${rhythm(1)};
`

export default () => (
    <Wrapper>
        <SectionTitle>Getting started</SectionTitle>
        <SubNav>
            <LinkItem to="/docs/getting-started/installation/">
                Installation
            </LinkItem>
            <LinkItem to="/docs/getting-started/redux/">
                Redux
            </LinkItem>
            <LinkItem to="/docs/getting-started/typescript/">
                Typescript
            </LinkItem>
        </SubNav>
        <SectionTitle>Components</SectionTitle>
        <SubNav>
            <LinkItem to="/docs/components/builder/">
                Builder
            </LinkItem>
            <LinkItem to="/docs/components/buttons/">
                Buttons
            </LinkItem>
            <LinkItem  to="/docs/components/form/">
                Form
            </LinkItem>
            <LinkItem to="/docs/components/notifications/">
                Notifications
            </LinkItem>
            <LinkItem to="/docs/components/panes/">
                Panes
            </LinkItem>
            <LinkItem to="/docs/components/tree/">
                Tree
            </LinkItem>
        </SubNav>
        <SectionTitle>Guides</SectionTitle>
        <SubNav>
            <LinkItem to="/docs/guides/theming/">
                Theming
            </LinkItem>
        </SubNav>
    </Wrapper>
)
