import React from "react"
// import Seo from "../components/SEO"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Banner from "../components/Banner/index"
import Faq from "../components/Faq/Faq"
import Features from "../components/FeaturedServices/Features"
// import RichText from "../components/RichText"

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

// const ProductGallery = styled.section`
//   width: 100%;

//   > .container {
//     display: flex;
//     flex-wrap: wrap;
//     gap: calc(var(--gap) / 2);

//     @media (min-width: 1024px) {
//       gap: var(--gap);
//     }

//     > * {
//       width: calc(50% - 10px);

//       @media (min-width: 768px) {
//         width: calc(33.333% - 14px);
//       }

//       @media (min-width: 1024px) {
//         width: calc(25% - 30px);
//       }
//     }
//   }
// `

const ServiceTemplate = (serviceInfo) => {
  const {
    headerImage,
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
        <GatsbyImage
          className="banner__image"
          image={headerImage}
          alt={title}
        />
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
              <Faq
                title={faqs.question}
                description={faqs.answer}
              />             
            </div>
          )}
        </div>
      </ServiceTemplateStyles>
      {/* {gallery && (
        <ProductGallery className="section">
          <div className="container container__tight">
            {gallery.map((item, index) => {
              let galleyImage = getImage(item)
              return <GatsbyImage key={index} image={galleyImage} />
            })}
          </div>
        </ProductGallery>
      )} */}
      <Features
        title="Featured Products from Barcadia."
        introduction="Vivamus quam mauris, pulvinar vel mauris id, interdum semper neque. Proin malesuada libero eget tellus scelerisque, id egestas tortor egestas."
      />
    </>
  )
}

export default ServiceTemplate
