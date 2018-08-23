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
`

export default class PaneTheme extends React.Component {
    render() {
        const {
            values,
            onChange,
        } = this.props

        return (
            <Container>
                <Grid>
                    <Label htmlFor="pane.spacing">
                        spacing
                    </Label>
                    <Input
                        type="text"
                        id="pane.spacing"
                        value={values.pane.spacing}
                        onChange={onChange}
                    />
                    <span/>
                    <Label htmlFor="pane.header.height">
                        header height
                    </Label>
                    <Input
                        type="text"
                        id="pane.header.height"
                        value={values.pane.header.height}
                        onChange={onChange}
                    />
                    <span/>
                    <Label htmlFor="pane.header.background">
                        header background
                    </Label>
                    <Input
                        type="text"
                        id="pane.header.background"
                        value={values.pane.header.background}
                        onChange={onChange}
                    />
                    <ColorChip color={values.pane.header.background}/>
                    <Label htmlFor="pane.body.background">
                        body background
                    </Label>
                    <Input
                        type="text"
                        id="pane.body.background"
                        value={values.pane.body.background}
                        onChange={onChange}
                    />
                    <ColorChip color={values.pane.body.background}/>
                </Grid>
            </Container>
        )
    }
}
