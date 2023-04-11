import React from "react"
import ProductTemplate from "../../templates/product-template"
import Layout from "../../components/Layout"


const ProductionService = (serviceInfo) => {
    serviceInfo = {
        headerImageProduction: true,
        title: 'Music Production',
        introduction: 'Introduction for music production goes here',
        description: 'Description for music production goes here',
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


export default ProductionService