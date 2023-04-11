import React from "react"
// import Seo from "../components/SEO"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Banner from "../components/Banner/index"
import Faq from "../components/Faq/Faq"

const ServiceTemplateStyles = styled.div`
  .container {
    display: flex;
    flex-wrap: wrap;
    .column {
      flex: 0 0 100%;

      @media (min-width: 768px) {
        flex-basis: 50%;

        &:nth-child(1) {
          padding-right: 20px;
        }

        &:nth-child(2) {
          padding-left: 20px;
        }

        > * {
          &:last-child {
            margin-bottom: 0;
          }
        }
      }

      > * {
        &:first-child {
          margin-top: 0;
        }
      }
    }
  }
`

const ServiceTemplate = (serviceInfo) => {
  const {
    headerImageArtwork,
    headerImageProduction,
    headerImageMixing,
    headerImageAll,
    title,
    introduction,
    description,
    faqs,
  } = serviceInfo
  // const serviceHeaderImage = getImage(headerImage)
  return (
    <>
      <Banner
        title={title}
        subTitle={introduction}
        contact={true}
      >
        {headerImageArtwork && (
          <StaticImage
            className="banner__image"
            src="../images/artwork-service-background.jpeg"
            alt={title}
          />
        )}
        {headerImageProduction && (
          <StaticImage
            className="banner__image"
            src="../images/production-service-background.jpeg"
            alt={title}
          />
        )}
        {headerImageMixing && (
          <StaticImage
            className="banner__image"
            src="../images/mixing-service-background.jpeg"
            alt={title}
          />
        )}
        {headerImageAll && (
          <StaticImage
            className="banner__image"
            src="../images/all-services-background.jpeg"
            alt={title}
          />
        )}
   
      </Banner>
      <ServiceTemplateStyles className="section">
        <div className="container container__tight">
          {description && (
            <div className="column">
              {description}
            </div>
          )}
          {faqs && (
            <div className="column">
              {faqs.map((item, index) => {
                return(
                  <Faq
                    key={index}
                    title={item.question}
                    description={item.answer}
                  />
                )
              })}
            </div>
          )}
        </div>
      </ServiceTemplateStyles>
    </>
  )
}

export default ServiceTemplate
