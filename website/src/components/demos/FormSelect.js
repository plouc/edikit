import React from 'react'
import styled from 'styled-components'
import { Select } from 'edikit'
import ThemableDemo from './ThemableDemo'

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 12px;
    grid-row-gap: 9px;
`

export default () => (
    <ThemableDemo>
        <Select>
            <option value="first-option">First option</option>
            <option value="second-option">Second option</option>
            <option value="third-option">Third option</option>
        </Select>
    </ThemableDemo>
)