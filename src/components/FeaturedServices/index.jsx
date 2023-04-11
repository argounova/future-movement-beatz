import * as React from "react"
import { Link } from "gatsby"
import { FeaturedProductsStyles } from "./style"
import { FeaturedProductStyles } from "./style"
import { StaticImage } from "gatsby-plugin-image"
import Button from "../Button/index"

const FeaturedServices = ({ title, introduction }) => {

  return (
    <FeaturedProductsStyles className="section">
      {title || introduction ? (
        <div className="container container__tight">
          <div className="intro__area">
            {title && <h2>{title}</h2>}
            {introduction && <p>{introduction}</p>}
          </div>
        </div>
      ) : null}
      <div className="container container__tight container__scroll">
        <FeaturedProductStyles>
          <StaticImage
            className="features__item--img"
            src='../../images/album-art.jpeg'
            alt="album artwork"
          />
          <div className="features__item--content">
            <h4>Album Artwork</h4>
            {/* <p>Let us design your next album cover</p> */}
            <Button text="Learn More" as={Link} to="/services/artwork" arrow={true} />
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
              {/* <p>Professionally produced tracks and full length albums</p> */}
              <Button text="Learn More" as="span" arrow={true} />
            </div>
        </FeaturedProductStyles>
        <FeaturedProductStyles>
          <StaticImage
            className="features__item--img"
            src='../../images/mixing-services.jpeg'
            alt="song writing"
          />
            <div className="features__item--content">
              <h4>Mixing and Mastering</h4>
              {/* <p>Achieving that perfect sound</p> */}
              <Button text="Learn More" as="span" arrow={true} />
            </div>
        </FeaturedProductStyles>

      </div>
      <div className="container container__tight learn__more">
        <Button as={Link} to="/comingsoon" text="All Services" />
      </div>
    </FeaturedProductsStyles>
  )
}

export default FeaturedServices