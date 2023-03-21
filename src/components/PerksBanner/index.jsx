import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { PerksBannerStyles } from "./style"
import { MdOutlineClose as Cross } from "react-icons/md"
import Perk from "./perk"

const PerksBanner = () => {
  return (
    <PerksBannerStyles className="section section__padding">
      <StaticImage
        className="perks__image--bg"
        src="../../../static/smoke-background.jpg"
        alt="Perks Module"
        layout="constrained"
        placeholder="tracedSVG"
      />
      <div className="perks__image--overlay"></div>
      <div className="container container__tight">
        <Perk
          title="Abstrakt Noize 3"
          content="Listen on Spotify"
        >
          <StaticImage
            src="../../../static/abstrakt-noize-3.png"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          />
        </Perk>
        <span className="perks__divider">
          <Cross />
        </span>
        <Perk
          title="Abstrakt Lofi"
          content="Listen on Spotify"
        >
          <StaticImage
            src="../../../static/abstrakt-lofi.png"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          />
        </Perk>
      </div>
    </PerksBannerStyles>
  )
}

export default PerksBanner
