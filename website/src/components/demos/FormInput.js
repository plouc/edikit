import React from 'react'
import styled from 'styled-components'
import { Select, Input } from 'edikit'
import ThemableDemo from './ThemableDemo'

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 12px;
    grid-row-gap: 9px;
`

export default () => (
    <ThemableDemo usePaneBackground={true}>
        <Grid>
            <Input type="text"/>
            <Input type="text" value="sample value"/>
            <Input type="text" placeholder="placeholder"/>
        </Grid>
    </ThemableDemo>
)