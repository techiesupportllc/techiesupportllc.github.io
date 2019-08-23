module.exports = {
  siteMetadata: {
    title: `Techie Support`,
    description: `Radically different web development`,
    siteUrl: `https://techiesupport.co`,
    image: `./images/logo.png`,
    twitterUsername: `@techiesupportco`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-feed`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Techie Support`,
        short_name: `Techie Support`,
        start_url: `/`,
        background_color: `#F8FAFC`,
        theme_color: `#f6993f`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_self`,
              rel: `nofollow`
            },
          },
          {
            resolve: `gatsby-remark-embed-video`,
            options: {
              width: 800,
              related: false,
              noIframeBorder: true,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#f6993f`,
      },
    },
    {
      resolve: `gatsby-plugin-snipcart`,
      options: {
        apiKey: `NDlhNjk5MjktYmQ3ZC00MjRiLTgxOWUtZGQ5ZTczYmRmNDRhNjM3MDIxNzMxMzgzNjYzMDIy`,
        autopop: true,
      },
    },
  ],
}
