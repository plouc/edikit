import Typography from 'typography'
import theme from 'typography-theme-fairy-gates'

theme.baseFontSize = '16px'

const typography = new Typography(theme)

export default typography
export const rhythm = typography.rhythm
