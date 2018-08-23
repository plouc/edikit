import * as React from 'react'
import {
    IPane,
    IPaneContent,
    IContentType,
    PaneSplitAxis
} from '../types'
import {
    setCurrentPane,
    addContentToCurrentPane,
    setPaneCurrentContent,
    removePaneContent,
    splitPane,
} from '../operations'

export interface IPanesManagerRenderArg<Data> {
    panes: Array<IPane<Data>>
    contentTypes: Array<IContentType<Data>>
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

export interface IPanesManagerProps<Data> {
    panes?: Array<IPane<Data>>
    contentTypes: Array<IContentType<Data>>
    render(props: IPanesManagerRenderArg<Data>): React.ReactNode
}

export interface IPanesManagerState<Data> {
    panes: Array<IPane<Data>>
}

export default class PanesManager<Data> extends React.Component<
    IPanesManagerProps<Data>,
    IPanesManagerState<Data>
> {
    constructor(props: IPanesManagerProps<Data>) {
        super(props)

        this.state = {
            panes: props.panes || [{
                id: 'root',
                isCurrent: true,
                split: false,
                splitAxis: PaneSplitAxis.Vertical,
                contents: [],
                children: [],
            }]
        }
    }

    setCurrentPane = (paneId: string) => {
        this.setState({
            panes: setCurrentPane(this.state.panes, paneId),
        })
    }

    addContentToCurrentPane = (content: IPaneContent<Data>) => {
        this.setState({
            panes: addContentToCurrentPane(this.state.panes, content)
        })
    }

    setPaneCurrentContent = (paneId: string, contentId: string) => {
        this.setState({
            panes: setPaneCurrentContent(this.state.panes, paneId, contentId),
        })
    }

    removePaneContent = (paneId: string, contentId: string) => {
        this.setState({
            panes: removePaneContent(this.state.panes, paneId, contentId),
        })
    }

    splitPane = (paneId: string, axis: PaneSplitAxis) => {
        this.setState({
            panes: splitPane(this.state.panes, paneId, axis)
        })
    }

    render() {
        return this.props.render({
            panes: this.state.panes,
            contentTypes: this.props.contentTypes,
            setCurrentPane: this.setCurrentPane,
            addContentToCurrentPane: this.addContentToCurrentPane,
            setPaneCurrentContent: this.setPaneCurrentContent,
            removePaneContent: this.removePaneContent,
            splitPane: this.splitPane,
        })
    }
}
