import * as React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner/index"
import TextBanner from "../components/TextBanner/index"
import PerksBanner from "../components/PerksBanner/index"
import Perk from "../components/PerksBanner/perk"
import FeaturedServices from "../components/FeaturedServices/index"
import LatestSingles from "../components/Singles/index"
import { heading } from './index.module.css'

const IndexPage = () => {
  return (
    <Layout>
      <h1 className={heading}>
        Coming Soon
      </h1>
      <Banner
        title="Future Movement Beatz"
        subTitle="Just an artist trying to make a living."
      />
      <TextBanner
        title="It is important that the musician just lets the music be written."
        content="- Bjork"
        link="/services"
        linkText="View Services"
      />
      <PerksBanner>
        <Perk title="The Title" content="The content" />
      </PerksBanner>
      <FeaturedServices
        title="Featured Services of FMB"
        introduction="Let us help with your next album"
      />
      <LatestSingles
        title="The Latest Singles from FMB"
        introduction="Available to stream now on Spotify"
      />
    </Layout>
  )
}

export const Head = () => <title>Future Movement Beatz</title>

export default IndexPage