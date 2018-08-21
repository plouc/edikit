import React from 'react'
// import { graphql } from 'gatsby'
import Layout from './Layout'

export default (props) => {
    //const post = data.markdownRemark

  console.log(props)

    return (
        <Layout>
            HELLO
        </Layout>
    )
}

/*
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
*/