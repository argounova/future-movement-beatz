import React from "react"
import ProductTemplate from "../../templates/product-template"
import Layout from "../../components/Layout"


const MixingService = (serviceInfo) => {
    serviceInfo = {
        headerImageMixing: true,
        title: 'Mixing and Mastering',
        introduction: 'Introduction for mixing and mastering goes here',
        description: 'Description for mixing and mastering goes here',
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


export default MixingService