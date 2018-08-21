import React from 'react'
import styled from 'styled-components'
import {
    PaneManager,
    setPaneCurrentContent,
    setCurrentPane,
    removePaneContent,
    splitPane,
} from 'edikit'
import ThemableDemo from './ThemableDemo'

const Container = styled.div`
    height: 200px;
    position: relative;
`

const Icon = styled.span`
    font-size: 12px;
    font-weight: bolder;
    color: ${props => props.theme.colors.accent};
`

const DemoPane = styled.div`
    padding: 16px;
    font-size: 13px;
    height: 100%;
    background: ${props => props.theme.pane.body.background};
`

const contentTypes = [
    {
        id: 'demo',
        renderButton: (context) => `content ${context.content.id}`,
        renderIcon: () => <Icon>C</Icon>,
        renderPane: (context) => (
            <DemoPane>
                Demo pane content {context.content.id}
            </DemoPane>
        ),
    }
]

export default class PanesDemo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            panes: [
                {
                    id: 'a',
                    contents: [],
                    split: true,
                    splitAxis: 'vertical',
                    children: ['b', 'c'],
                },
                {
                    id: 'b',
                    childOf: 'a',
                    isCurrent: true,
                    contents: [
                        {
                            id: 'a',
                            type: 'demo',
                            isCurrent: true,
                            isUnique: false,
                        },
                        {
                            id: 'b',
                            type: 'demo',
                            isCurrent: false,
                            isUnique: false,
                        }
                    ],
                    children: [],
                },
                {
                    id: 'c',
                    childOf: 'a',
                    contents: [
                        {
                            id: 'c',
                            type: 'demo',
                            isCurrent: false,
                            isUnique: false,
                        },
                        {
                            id: 'd',
                            type: 'demo',
                            isCurrent: true,
                            isUnique: false,
                        }
                    ],
                    children: [],
                }
            ]
        }
    }

    setCurrentPane = paneId => {
        this.setState({
            panes: setCurrentPane(this.state.panes, paneId),
        })
    }

    setPaneCurrentContent = (paneId, contentId) => {
        this.setState({
            panes: setPaneCurrentContent(this.state.panes, paneId, contentId),
        })
    }

    removePaneContent = (paneId, contentId) => {
        this.setState({
            panes: removePaneContent(this.state.panes, paneId, contentId),
        })
    }

    splitPane = (paneId, axis) => {
        this.setState({
            panes: splitPane(this.state.panes, paneId, axis)
        })
    }

    render() {
        return (
            <ThemableDemo>
                <Container>
                    <PaneManager
                        init={() => {}}
                        panes={this.state.panes}
                        root={this.state.panes.find(pane => pane.childOf === undefined)}
                        contentTypes={contentTypes}
                        setCurrentPane={this.setCurrentPane}
                        setPaneCurrentContent={this.setPaneCurrentContent}
                        removePaneContent={this.removePaneContent}
                        splitPane={this.splitPane}
                    />
                </Container>
            </ThemableDemo>
        )
    }
}
