import Typography from 'typography/dist/index.m.js'
import theme from 'typography-theme-fairy-gates'

theme.baseFontSize = '16px'

const typography = new Typography(theme)

export const rhythm = typography.rhythm

export default typography
