import * as React from "react"
import { Link } from "gatsby"
import { FeaturedProductsStyles } from "./style"
import { FeaturedProductStyles } from "./style"
import { StaticImage } from "gatsby-plugin-image"
import Button from "../Button/index"

const FeaturedServices = () => {

  return (
    <FeaturedProductsStyles className="section">
      <div className="container container__tight container__scroll">
        <FeaturedProductStyles>
          <StaticImage
            className="features__item--img"
            src='../../images/album-artwork.jpeg'
            alt="album artwork"
          />
            <div className="features__item--content">
              <h4>Custom Album Artwork</h4>
              <p>Let FMB design your next album cover</p>
              <Button text="Read More" as="span" arrow={true} />
            </div>
        </FeaturedProductStyles>
        <FeaturedProductStyles>
          <StaticImage
            className="features__item--img"
            src='../../images/music-production.jpeg'
            alt="music-production"
          />
            <div className="features__item--content">
              <h4>Track Production</h4>
              <p>Professionally produced tracks and full length albums</p>
              <Button text="Read More" as="span" arrow={true} />
            </div>
        </FeaturedProductStyles>
        <FeaturedProductStyles>
          <StaticImage
            className="features__item--img"
            src='../../images/music-writing.jpeg'
            alt="song writing"
          />
            <div className="features__item--content">
              <h4>Song Writing</h4>
              <p>Need help with beats or melodies?  Look no further than FMB</p>
              <Button text="Read More" as="span" arrow={true} />
            </div>
        </FeaturedProductStyles>

      </div>
      <div className="container container__tight learn__more">
        <Button as={Link} to="/services" text="All Services" />
      </div>
    </FeaturedProductsStyles>
  )
}

export default FeaturedServices