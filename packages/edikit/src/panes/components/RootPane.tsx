import * as React from 'react'
import {
    IPane,
    IPaneContent,
    IContentType,
    PaneSplitAxis
} from '../types'
import Pane from './Pane'
import { Container } from './RootPane_styled'

export interface IRootPaneProps<Data> {
    panes: Array<IPane<Data>>
    contentTypes: Array<IContentType<Data>>
    init?: () => void
    setCurrentPane: (
        paneId: string
    ) => void
    addContentToCurrentPane: (
        content: IPaneContent<Data>
    ) => void
    setPaneCurrentContent: (
        paneId: string,
        contentId: string
    ) => void
    removePaneContent: (
        paneId: string,
        contentId: string
    ) => void
    splitPane: (
        paneId: string,
        axis: PaneSplitAxis
    ) => void
}

export default class RootPane<Data> extends React.Component<IRootPaneProps<Data>> {
    componentDidMount() {
        if (this.props.init !== undefined) {
            this.props.init()
        }
    }

    render() {
        const {
            panes,
            contentTypes,
            setCurrentPane,
            setPaneCurrentContent,
            removePaneContent,
            splitPane,
        } = this.props

        const root = panes.find(pane => pane.childOf === undefined)
        if (root === undefined) return null

        return (
            <Container>
                <Pane
                    pane={root}
                    panes={panes}
                    contentTypes={contentTypes}
                    setCurrentPane={setCurrentPane}
                    setPaneCurrentContent={setPaneCurrentContent}
                    removePaneContent={removePaneContent}
                    splitPane={splitPane}
                />
            </Container>
        )
    }
}
