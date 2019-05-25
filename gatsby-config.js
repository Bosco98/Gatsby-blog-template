module.exports = {
  siteMetadata: {
    title: `My app`,
  },
  pathPrefix: `/gatsby-plugin-elasticlunr-search`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options:{
        plugins:[
          `gatsby-remark-relative-images`,
          {
            resolve:`gatsby-remark-images`,
            options:{
              maxWidth:750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `tags`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            path: node => node.frontmatter.path,
            tags: node => node.frontmatter.tags,
          },
        },
      },
    },
    `gatsby-plugin-sharp`,

  ],
}
