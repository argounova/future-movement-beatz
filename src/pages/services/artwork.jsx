import React from "react"
import ProductTemplate from "../../templates/product-template"
import Layout from "../../components/Layout"


const ArtworkService = (serviceInfo) => {
    serviceInfo = {
        headerImageArtwork: true,
        title: 'Custom Album Artwork',
        introduction: 'Introduction for custom album artwork goes here',
        description: 'Description for custom album artwork goes here',
        faqs: [
            {
                question: 'FAQ Question 1',
                answer: 'FAQ Answer 1',
            },
            {
                question: 'FAQ Question 2',
                answer: 'FAQ Answer 2',
            },
            {
                question: 'FAQ Question 3',
                answer: 'FAQ Answer 3',
            },
        ]
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