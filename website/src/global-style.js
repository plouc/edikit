import { injectGlobal } from 'styled-components'
import './prism-style'

injectGlobal`
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
    text-decoration: none;
    color: #417db9;
    background-image: none;
    text-shadow: none;
}

code, pre {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}

code:not([class*="language-"]) {
    background: #b6f1e2;
    padding: 2px 6px;
    border-radius: 2px;
}
`

