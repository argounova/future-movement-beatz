import { useStaticQuery, graphql } from "gatsby"

export const UseSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return site.siteMetadata
}

//             developerName
//             developerUrl
//             twitterUsername
//             facebookUsername
//             instagramUsername
//             linkedinUsername
//             author
//             twitterUsername
//             description
