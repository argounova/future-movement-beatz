import { useStaticQuery, graphql } from "gatsby"

export const UseSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            tiktokUsername
            developerName
            developerUrl
            youtubeUsername
            instagramUsername
          }
        }
      }
    `
  )

  return site.siteMetadata
}