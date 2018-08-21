import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { rhythm } from '../utils/typography'
import Header from './Header'
import Sidebar from './Sidebar'

const colors = {
    lighter: '#373940', // light blue
    dark: '#282c34', // dark blue
    darker: '#20232a', // really dark blue
    brand: '#61dafb', // electric blue
    brandLight: '#bbeffd',
    text: '#1a1a1a', // very dark grey / black substitute
    subtle: '#6d6d6d', // light grey for text
    subtleOnDark: '#999',
    divider: '#ececec', // very light grey
    note: '#ffe564', // yellow
    error: '#ff6464', // yellow
    white: '#ffffff',
    black: '#000000',
  };

const prismColors = {
  char: '#D8DEE9',
  comment: '#999999',
  keyword: '#c5a5c5',
  lineHighlight: '#14161a',
  primitive: '#5a9bcf',
  string: '#8dc891',
  variable: '#d7deea',
  boolean: '#ff8b50',
  punctuation: '#5FB3B3',
  tag: '#fc929e',
  function: '#79b6f2',
  className: '#FAC863',
  method: '#6699CC',
  operator: '#fc929e',
};

injectGlobal`
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
    text-decoration: none;
    color: #417db9;
    background-image: none;
}

code, pre {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}

code:not([class*="language-"]) {
    background: #dae4f9;
    padding: 2px 6px;
    border-radius: 2px;
}

pre {
  background: ${colors.dark};
  color: ${colors.white};
  border-radius: 10;
  overflow: auto;
  tab-size: 1.5em;
}

pre > code[class*="language-"] {
    margin: 1rem;
    font-size: 12px !important;
    line-height: 17px !important;
    white-space: pre-wrap;
    word-break: break-word;
}

pre + pre {
  margin-top: 20px;
}

.gatsby-highlight-code-line {
  background-color: ${prismColors.lineHighlight};
  display: block;
  margin: -0.125rem calc(-1rem - 15px);
  padding: 0.125rem calc(1rem + 15px);
}

.token.attr-name {
  color: ${prismColors.keyword};
}

.token.comment,
.token.block-comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: ${prismColors.comment};
}

.token.property,
.token.number,
.token.function-name,
.token.constant,
.token.symbol,
.token.deleted {
  color: ${prismColors.primitive};
}
.token.boolean {
  color: ${prismColors.boolean};
}
.token.tag {
  color: ${prismColors.tag};
}
.token.string {
  color: ${prismColors.string};
}
.token.punctuation {
  color: ${prismColors.punctuation};
}
.token.selector,
.token.char,
.token.builtin,
.token.inserted {
  color: ${prismColors.char};
}
.token.function {
  color: ${prismColors.function};
}
.token.operator,
.token.entity,
.token.url,
.token.variable {
  color: ${prismColors.variable};
}
.token.attr-value {
  color: ${prismColors.string};
}
.token.keyword {
  color: ${prismColors.keyword};
}
.token.atrule,
.token.class-name {
  color: ${prismColors.className};
}
.token.important {
  font-weight: 400;
}
.token.bold {
  font-weight: 700;
}
.token.italic {
  font-style: italic;
}
.token.entity {
  cursor: help;
}
.namespace {
  opacity: 0.7;
}
`

const Container = styled.div`
    padding-top: ${rhythm(2)};
`

const Content = styled.div`
    padding-left: ${rhythm(12)};
`

const InnerContent = styled.div`
    max-width: 840px;
    margin: 0 auto;
    padding: ${rhythm(2)} ${rhythm(1)};
`

export default ({ children }) => (
    <div>
        <Header/>
        <Container>
            <Content>
                <InnerContent>
                    {children}
                </InnerContent>
            </Content>
            <Sidebar/>
        </Container>
    </div>
)
