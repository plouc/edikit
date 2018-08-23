import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

export default () => (
    <Layout>
        <h1>edikit</h1>
        <p>
            edikit is a toolkit aiming to build IDE like UIs,
            it provides several components and state management helpers.
        </p>
        <p>
            Have a look at the <Link to="/docs/getting-started/installation/">documentation</Link> for usage.
        </p>
    </Layout>
)