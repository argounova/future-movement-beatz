import React from "react"
import ProductTemplate from "../../templates/product-template"
import Layout from "../../components/Layout"
import image from "../../images/background-image.jpg"



const ArtworkService = (serviceInfo) => {
    serviceInfo = {
        headerImage: {image},
        title: 'Custom Album Artwork',
        introduction: 'Introduction for custom album artwork goes here',
        description: 'Description for custom album artwork goes here',
        faqs: {
            question: 'FAQ Question 1',
            answer: 'FAQ Answer 1',
        }
    }
  return (
    <>
      <Layout>
        <ProductTemplate
            {...serviceInfo}       
        />
      </Layout>
    </>
  )
}



export default ArtworkService