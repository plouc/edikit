import React from 'react'
import styled from 'styled-components'
import {
    Builder,
    BuilderLabel,
    Block,
    Input,
} from 'edikit'
import { Grid, Label, ColorChip } from './styled'

const Container = styled.div`
    background: ${props => props.theme.pane.body.background};
    padding: 12px 16px;
    height: 100%;
    overflow: auto;
`

export default class ThemeColors extends React.Component {
    render() {
        const {
            values,
            onChange,
        } = this.props

        return (
            <Container>
                <Grid>
                    <Label htmlFor="colors.background">
                        background
                    </Label>
                    <Input
                        type="text"
                        id="colors.background"
                        value={values.colors.background}
                        onChange={onChange}
                    />
                    <ColorChip color={values.colors.background}/>
                    <Label htmlFor="colors.accent">
                        accent
                    </Label>
                    <Input
                        type="text"
                        id="colors.accent"
                        value={values.colors.accent}
                        onChange={onChange}
                    />
                    <ColorChip color={values.colors.accent}/>
                    <Label htmlFor="colors.muted">
                        muted
                    </Label>
                    <Input
                        type="text"
                        id="colors.muted"
                        value={values.colors.muted}
                        onChange={onChange}
                    />
                    <ColorChip color={values.colors.muted}/>
                    <Label htmlFor="colors.success">
                        success
                    </Label>
                    <Input
                        type="text"
                        id="colors.success"
                        value={values.colors.success}
                        onChange={onChange}
                    />
                    <ColorChip color={values.colors.success}/>
                    <Label htmlFor="colors.warning">
                        warning
                    </Label>
                    <Input
                        type="text"
                        id="colors.warning"
                        value={values.colors.warning}
                        onChange={onChange}
                    />
                    <ColorChip color={values.colors.warning}/>
                    <Label htmlFor="colors.danger">
                        danger
                    </Label>
                    <Input
                        type="text"
                        id="colors.danger"
                        value={values.colors.danger}
                        onChange={onChange}
                    />
                    <ColorChip color={values.colors.danger}/>
                </Grid>
            </Container>
        )
    }
}
