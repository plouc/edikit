import { css } from 'styled-components'

const prismColors = {
    background: '#1c2738',
    text: '#f7f8fd',
    char: '#D8DEE9',
    comment: '#8b9bb9',
    keyword: '#3298ee',
    lineHighlight: '#14161a',
    primitive: '#2fa1f2',
    string: '#6df1d1',
    variable: '#d7deea',
    boolean: '#ff997b',
    punctuation: '#5fcfb3',
    tag: '#ff997b',
    function: '#7fbcf7',
    className: '#d8fa69',
    method: '#7fbcf7',
    operator: '#ff997b',
}

export default css`
pre {
    background: ${prismColors.background};
    color: ${prismColors.text};
    border-radius: 3px;
    overflow: auto;
    tab-size: 1.5em;
    height: auto;
    padding: 12px 18px;
    font-size: 13px;
    line-height: 20px;
}

pre > code {
    white-space: pre-wrap;
    word-break: break-word;
    background: transparent;
    padding: 0;
    border-radius: 0;
    font-size: 13px;
    line-height: 20px;
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

