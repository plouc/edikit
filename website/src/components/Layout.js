import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    position: fixed;
    background: red;
    width: 260px;
    top: 60px;
    bottom: 0;
    left: 0;
`

const Sidebar = ({}) => (
    <Wrapper>
        SIDEBAR
    </Wrapper>
)

export default Sidebar