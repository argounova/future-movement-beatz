/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `FMB`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-mdx", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": `services`,
      "path": `${__dirname}/services`,
    },
    resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Josefin Sans\:200,300,400,500`,
          `source sans pro\:300,400,400i,700`,
          `Sedgwick Ave Display\:400`,
          `Orbitron\:400`
        ],
        display: 'swap'
    },
    __key: "images"
  }]
};