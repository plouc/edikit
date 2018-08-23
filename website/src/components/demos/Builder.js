import React from 'react'
import styled from 'styled-components'
import { Builder, BuilderLabel, Block } from 'edikit'
import ThemableDemo from './ThemableDemo'

const Container = styled.div`
`

export default () => (
    <ThemableDemo disableContentPadding={true}>
        <Container>
            <Builder
                title="Builder title"
                subtitle="Builder subtitle"
            >
                <BuilderLabel withLink={true}>
                    BuilderLabel
                </BuilderLabel>
                <Block title="Block" withLink={true}>
                    <Block title="Block" withLink={false}>
                        Nested Block 1
                    </Block>
                    <Block title="Block" withLink={false}>
                        Nested Block 2
                    </Block>
                </Block>
            </Builder>
        </Container>
    </ThemableDemo>
)