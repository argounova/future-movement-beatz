import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
// import Contact from "../components/Contact/index"
// import Seo from "../components/SEO"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"

const contact = () => {
  return (
    <>
      {/* <Seo title="Contact" /> */}
      <Layout>
        <SimpleBanner title="About Future Movement Beatz">
          <StaticImage
            className="banner__image"
            src="../../static/smoke-background.jpg"
            alt="smoke background"
          />
        </SimpleBanner>
        {/* <Contact /> */}
      </Layout>
    </>
  )
}

export default contact
