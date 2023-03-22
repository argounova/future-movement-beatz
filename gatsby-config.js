module.exports = {
  siteMetadata: {
    title: `FMB`,
    description: "Marketing and promotional site for Future Movement Beatz",
    author: "Craig Putzstuck",
    tiktokUsername: "abstraktiusartimus",
    youtubeUsername: "abstraktius_artimus",
    instagramUsername: "abstraktius_artimus",
    // image: "/macbook-color.jpg",
    // siteUrl: "https://www.futuremovementbeatz.com",
    developerName: "DM Solutions",
    developerUrl: "https://www.digitalmotorsportsolutions.com",
  },
  plugins: [
    "gatsby-plugin-mdx",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Josefin Sans\:200,300,400,500`,
          `source sans pro\:300,400,400i,700`,
          `Sedgwick Ave Display\:400`,
          `Orbitron\:400`
        ],
        // display: 'swap'
      },
    }
  ]
};