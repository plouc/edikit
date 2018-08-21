import React from 'react'
import styled from 'styled-components'
import { Button } from 'edikit'
import ThemableDemo from './ThemableDemo'

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 12px;
    grid-row-gap: 9px;
`

export default () => (
    <ThemableDemo>
        <Grid>
            <Button variant="default" style={{ marginRight: 9 }}>
                default
            </Button>
            <Button variant="primary" style={{ marginRight: 9 }}>
                primary
            </Button>
            <Button variant="success" style={{ marginRight: 9 }}>
                success
            </Button>
            <Button variant="warning" style={{ marginRight: 9 }}>
                warning
            </Button>
            <Button variant="danger">
                danger
            </Button>
            <Button variant="default" size="large" style={{ marginRight: 9 }}>
                default L
            </Button>
            <Button variant="primary" size="large" style={{ marginRight: 9 }}>
                primary L
            </Button>
            <Button variant="success" size="large" style={{ marginRight: 9 }}>
                success L
            </Button>
            <Button variant="warning" size="large" style={{ marginRight: 9 }}>
                warning L
            </Button>
            <Button variant="danger" size="large">
                danger L
            </Button>
        </Grid>
    </ThemableDemo>
)