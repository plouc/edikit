import styled from 'styled-components'

export const Label = styled.label`
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 16px;
    grid-column-gap: 12px;
    grid-row-gap: 12px;
    align-items: center;
`

export const ColorChip = styled.div`
    width: 16px;
    height: 16px;
    border-radius: 1px;
    background: ${props => props.color};
`