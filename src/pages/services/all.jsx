import React from "react"
import ProductTemplate from "../../templates/product-template"
import Layout from "../../components/Layout"


const AllServices = (serviceInfo) => {
    serviceInfo = {
        headerImageAll: true,
        title: 'All Services Offered',
        introduction: 'Everything Future Movement Beatz can do for you',
        description: 'Description goes here.  This page will be reorganized slightly.',
        faqs: [
            {
                question: 'Service 1',
                answer: 'Link To Service 1',
            },
            {
                question: 'Service 2',
                answer: 'Link To Service 2',
            },
            {
                question: 'Service 3',
                answer: 'Link To Service 3',
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


export default AllServices