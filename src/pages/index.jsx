import * as React from "react"
import Layout from "../components/Layout"
import { heading } from './index.module.css'

const IndexPage = () => {
  return (
    <Layout>
      <h1 className={heading}>
        Coming Soon
      </h1>
    </Layout>
  )
}

export const Head = () => <title>Future Movement Beatz</title>

export default IndexPage