import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FeaturedAlbumsStyles } from "./style"
import { MdOutlineClose as Cross } from "react-icons/md"
import Album from "./album"

const FeaturedAlbums = () => {
  return (
    <FeaturedAlbumsStyles className="section section__padding">
      <StaticImage
        className="perks__image--bg"
        src="../../../static/smoke-background.jpg"
        alt="Perks Module"
        layout="constrained"
        placeholder="dominantColor"
      />
      <div className="perks__image--overlay"></div>
      <div className="container container__tight">
        <Album
          title="Abstrakt Noize 3"
          content="Listen on Spotify"
        >
          <StaticImage
            src="../../../static/abstrakt-noize-3.png"
            alt="Perk Image"
            placeholder="dominantColor"
          />
        </Album>
        <span className="perks__divider">
          <Cross />
        </span>
        <Album
          title="Abstrakt Lofi"
          content="Listen on Spotify"
        >
          <StaticImage
            src="../../../static/abstrakt-lofi.png"
            alt="Perk Image"
            layout="constrained"
            placeholder="dominantColor"
          />
        </Album>
      </div>
    </FeaturedAlbumsStyles>
  )
}

export default FeaturedAlbums
