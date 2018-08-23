import React from 'react'
import { cloneDeep } from 'lodash'
import styled, { ThemeProvider } from 'styled-components'
import { withFormik } from 'formik'
import {
    whiteTheme,
    PanesManager,
    RootPane,
} from 'edikit'
import ThemableDemo from '../demos/ThemableDemo'
import ThemeColors from './ThemeColors'
import BuilderTheme from './BuilderTheme'
import PaneTheme from './PaneTheme'

const Container = styled.div`
    height: 700px;
    position: relative;
    background: ${props => props.theme.colors.background};
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

const enhance = withFormik({
    enableReinitialize: false,
    isInitialValid: true,
    mapPropsToValues: props => {
        return cloneDeep(whiteTheme)
    },
    handleSubmit: (values, { props }) => {
        console.log(values)
    }
})

const panes = [
    {
        id: 'root',
        contents: [],
        split: true,
        splitAxis: 'vertical',
        children: ['left', 'right'],
    },
    {
        id: 'left',
        childOf: 'root',
        isCurrent: false,
        contents: [],
        split: true,
        splitAxis: 'horizontal',
        children: [
            'left_top',
            'left_bottom',
        ],
    },
    {
        id: 'left_top',
        childOf: 'left',
        isCurrent: true,
        contents: [
            {
                id: 'theme_colors',
                type: 'theme_colors',
                isCurrent: true,
                isUnique: false,
            },
        ],
        split: false,
        splitAxis: 'horizontal',
        children: [],
    },
    {
        id: 'left_bottom',
        childOf: 'left',
        contents: [
            {
                id: 'pane_theme',
                type: 'pane_theme',
                isCurrent: true,
                isUnique: false,
            },
        ],
        split: false,
        splitAxis: 'horizontal',
        children: [],
    },
    {
        id: 'right',
        childOf: 'root',
        contents: [],
        split: true,
        splitAxis: 'horizontal',
        children: [
            'right_top',
            'right_bottom',
        ],
    },
    {
        id: 'right_top',
        childOf: 'right',
        contents: [
            {
                id: 'builder_theme',
                type: 'builder_theme',
                isCurrent: true,
                isUnique: false,
            }
        ],
        children: [],
    },
    {
        id: 'right_bottom',
        childOf: 'right',
        contents: [
            {
                id: 'form_theme',
                type: 'form_theme',
                isCurrent: true,
                isUnique: false,
            }
        ],
        children: [],
    },
]

class ThemeBuilder extends React.Component {
    render() {
        //console.log(this.props)
        const {
            values,
            handleChange,
        } = this.props

        const contentTypes = [
            {
                id: 'theme_colors',
                renderButton: () => 'Theme colors',
                renderIcon: () => <Icon>C</Icon>,
                renderPane: () => (
                    <ThemeColors
                        values={values}
                        onChange={handleChange}
                    />
                ),
            },
            {
                id: 'builder_theme',
                renderButton: () => 'Builder theme',
                renderIcon: () => <Icon>B</Icon>,
                renderPane: () => (
                    <BuilderTheme
                        values={values}
                        onChange={handleChange}
                    />
                ),
            },
            {
                id: 'pane_theme',
                renderButton: () => 'Pane theme',
                renderIcon: () => <Icon>P</Icon>,
                renderPane: () => (
                    <PaneTheme
                        values={values}
                        onChange={handleChange}
                    />
                ),
            },
            {
                id: 'form_theme',
                renderButton: () => 'Form theme',
                renderIcon: () => <Icon>F</Icon>,
                renderPane: () => (
                    <PaneTheme
                        values={values}
                        onChange={handleChange}
                    />
                ),
            }
        ]

        return (
            <ThemableDemo disableContentPadding={true}>
                <ThemeProvider theme={values}>
                    <Container>
                        <PanesManager
                            panes={panes}
                            contentTypes={contentTypes}
                            render={props => <RootPane {...props}/>}
                        />
                    </Container>
                </ThemeProvider>
            </ThemableDemo>
        )
    }
}

export default enhance(ThemeBuilder)