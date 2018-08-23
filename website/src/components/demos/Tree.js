import React from 'react'
import styled from 'styled-components'
import { Tree } from 'edikit'
import ThemableDemo from './ThemableDemo'

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 12px;
    grid-row-gap: 9px;
`

const root = {
    id: 'root_folder',
    type: 'folder',
    label: 'root',
    children: [
        {
            id: 'file_00',
            type: 'file',
            label: 'file_00'
        },
        {
            id: 'file_01',
            type: 'file',
            label: 'file_01',
            isCurrent: true,
        },
        {
            id: 'sub_folder_00',
            type: 'folder',
            label: 'sub_folder_00',
            children: [
                {
                    id: 'file_02',
                    type: 'file',
                    label: 'file_02',
                    isCurrent: true,
                },
                {
                    id: 'file_03',
                    type: 'file',
                    label: 'file_03'
                },
            ],
        },
        {
            id: 'sub_folder_01',
            type: 'folder',
            label: 'sub_folder_01',
            children: [
                {
                    id: 'file_04',
                    type: 'file',
                    label: 'file_04',
                    isCurrent: true,
                },
                {
                    id: 'file_05',
                    type: 'file',
                    label: 'file_05'
                },
            ],
        }
    ]
}

export default () => (
    <ThemableDemo disableContentPadding={true}>
        <Tree
            root={root}
            openedIds={[
                'root_folder',
                'sub_folder_00',
                'sub_folder_01',
            ]}
        />
    </ThemableDemo>
)