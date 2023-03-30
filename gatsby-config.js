module.exports = {
  siteMetadata: {
    title: `FMB`,
    description: "Marketing and promotional site for Future Movement Beatz",
    author: "Craig Putzstuck",
    tiktokUsername: "abstraktiusartimus",
    youtubeUsername: "abstraktius_artimus",
    instagramUsername: "abstraktius_artimus",
    image: "/background1.jpg",
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
  ]
};