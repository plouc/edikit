import React from 'react'
import styled from 'styled-components'
import { Notifications } from 'edikit'
import ThemableDemo from './ThemableDemo'

const Container = styled.div`
    position: relative;
    height: 210px;
`

export default () => (
    <ThemableDemo disableContentPadding={true}>
        <Container>
            <Notifications
                notifications={[
                    {
                        id: 'default',
                        type: 'default',
                        content: 'default notification',
                    },
                    {
                        id: 'success',
                        type: 'success',
                        content: 'success notification',
                    },
                    {
                        id: 'warning',
                        type: 'warning',
                        content: 'warning notification',
                    },
                    {
                        id: 'danger',
                        type: 'danger',
                        content: 'danger notification',
                    },
                ]}
            />
        </Container>
    </ThemableDemo>
)