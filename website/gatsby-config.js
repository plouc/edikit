const prism = require('@mapbox/rehype-prism')
const slug = require('rehype-slug')
const autolinkHeadings = require('rehype-autolink-headings')

module.exports = {
    siteMetadata: {
        title: 'edikit',
    },
    pathPrefix: '/edikit',
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `docs`,
                path: `${__dirname}/src/pages/docs/`,
            },
        },
        {
            resolve: 'gatsby-mdx',
            options: {
                defaultLayouts: {
                  docs: require.resolve('./src/components/DocLayout.js')
                },
                root: __dirname,
                hastPlugins: [
                    [slug],
                    [autolinkHeadings],
                    [prism, { ignoreMissing: false }],
                ],
              }
        },
        'gatsby-plugin-styled-components',
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/utils/typography.js',
            },
        }
    ],
}