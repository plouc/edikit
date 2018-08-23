import React from 'react'
import styled from 'styled-components'
import {
    Builder,
    BuilderLabel,
    Block,
    Input,
} from 'edikit'
import { Grid, Label, ColorChip } from './styled'

export default class BuilderTheme extends React.Component {
    render() {
        const {
            values,
            onChange,
        } = this.props

        return (
            <Builder
                title="Builder"
                subtitle="Builder theme"
            >
                <BuilderLabel withLink={true}>
                    Builder
                </BuilderLabel>
                <Block withLink={true}>
                    <Grid>
                        <Label htmlFor="builder.spacing">
                            spacing
                        </Label>
                        <Input
                            type="text"
                            id="builder.spacing"
                            value={values.builder.spacing}
                            onChange={onChange}
                        />
                        <span/>
                        <Label htmlFor="builder.background">
                            background
                        </Label>
                        <Input
                            type="text"
                            id="builder.background"
                            value={values.builder.background}
                            onChange={onChange}
                        />
                        <ColorChip color={values.builder.background}/>
                        <Label htmlFor="builder.link.color">
                            link color
                        </Label>
                        <Input
                            type="text"
                            id="builder.link.color"
                            value={values.builder.link.color}
                            onChange={onChange}
                        />
                        <ColorChip color={values.builder.link.color}/>
                    </Grid>
                </Block>
                <BuilderLabel withLink={true}>
                    BuilderLabel
                </BuilderLabel>
                <Block withLink={true}>
                    BuilderLabel
                </Block>
                <BuilderLabel withLink={true}>
                    Block
                </BuilderLabel>
                <Block withLink={true}>
                    Block
                </Block>
            </Builder>
        )
    }
}
