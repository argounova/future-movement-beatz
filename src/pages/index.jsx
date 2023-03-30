import * as React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner/index"
import TextBanner from "../components/TextBanner/index"
// import FeaturedAlbums from "../components/FeaturedAlbums/index"
// import Album from "../components/FeaturedAlbums/album"
import FeaturedServices from "../components/FeaturedServices/index"
import FeaturedSingles from "../components/FeaturedSingles/index"
import Video from "../components/Video/index"

const IndexPage = () => {
  return (
    <Layout>
      <Banner
        title="Future Movement Beatz"
        subTitle="Music production and custom album cover art."
      />
      <TextBanner
        title="It is important that the musician just lets the music be written."
        content="- Bjork"
        link="/services"
        linkText="View Services"
      />
      <Video 
        videoSrcURL="https://www.youtube.com/embed/tLRp9vaY6VM"
        videoTitle="Abstrakt Noize 3 Official Visualizer"
      />
      {/* <FeaturedAlbums> */}
        {/* <Album title="The Title" content="The content" /> */}
      {/* </FeaturedAlbums> */}
      <FeaturedServices
        title="Featured Services of FMB"
        introduction="Let us help with your next album"
      />
      <FeaturedSingles
        title="The Latest Singles from FMB"
        introduction="Available to stream now on Spotify"
      />
    </Layout>
  )
}

export const Head = () => <title>Future Movement Beatz</title>

export default IndexPage