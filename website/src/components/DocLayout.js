import React from 'react'
import styled from 'styled-components'
import { rhythm } from '../utils/typography'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import '../global-style'

const Container = styled.div`
    padding-top: ${rhythm(2)};
`

const Content = styled.div`
    padding-left: ${rhythm(10)};
`

const InnerContent = styled.div`
    max-width: 840px;
    margin: 0 auto;
    padding: ${rhythm(2)} ${rhythm(1)};
`

export default ({ children }) => (
    <div>
        <Header/>
        <Container>
            <Content>
                <InnerContent>
                    {children}
                </InnerContent>
                <Footer/>
            </Content>
            <Sidebar/>
        </Container>
    </div>
)
