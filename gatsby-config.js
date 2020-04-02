module.exports = {
  siteMetadata: {
    title: `Kendy Nguyen`,
    description: `Kendy Nguyen's Portfolio`,
    author: `@kendynguyen`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     // background_color: `#663399`,
    //     theme_color: `hsl(189, 100%, 41%)`,
    //     display: `minimal-ui`,
    //     icon: `static/KN-web-portfolio-icon.svg`, // This path is relative to the root of the site.
    //   },
    // },
    `gatsby-plugin-emotion`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
