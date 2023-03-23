import * as React from "react"
import { Link } from "gatsby"
import { FeaturedSinglesStyles } from "./style"
import { FeaturedSingleStyles } from "./style"
import { StaticImage } from "gatsby-plugin-image"
import Button from "../Button/index"

const FeaturedSingles = ({ title, introduction }) => {

  return (
    <FeaturedSinglesStyles className="section">
      {title || introduction ? (
        <div className="container container__tight">
          <div className="intro__area">
            {title && <h2>{title}</h2>}
            {introduction && <p>{introduction}</p>}
          </div>
        </div>
      ) : null}
      <div className="container container__tight container__scroll">
        <FeaturedSingleStyles>
          <StaticImage
            className="features__item--img"
            src='../../images/single.jpeg'
            alt="featured single"
          />
          <div className="features__item--content">
            <h4>Track Title</h4>
            <p>Brief description of each track</p>
            <div >
          <a
            href="https://open.spotify.com/artist/36ZQelM5VwJYQ9MqY19aHT"
            target="_blank"
            rel="nofollow noreferrer noopener">
            <Button 
              as="span" 
              text="Listen Now" 
              arrow={true} 
              href="https://open.spotify.com/artist/36ZQelM5VwJYQ9MqY19aHT"
              target="_blank"
              rel="nofollow noreferrer noopener"
            />
          </a>
          <p>by Abstraktius Artimus</p>
        </div>
          </div>
        </FeaturedSingleStyles>
        <FeaturedSingleStyles>
          <StaticImage
            className="features__item--img"
            src='../../images/single.jpeg'
            alt="featured single"
          />
            <div className="features__item--content">
              <h4>Track Title</h4>
              <p>Brief description of each track</p>
              <div >
          <a
            href="https://open.spotify.com/artist/36ZQelM5VwJYQ9MqY19aHT"
            target="_blank"
            rel="nofollow noreferrer noopener">
            <Button 
              as="span" 
              text="Listen Now" 
              arrow={true} 
              href="https://open.spotify.com/artist/36ZQelM5VwJYQ9MqY19aHT"
              target="_blank"
              rel="nofollow noreferrer noopener"
            />
          </a>
          <p>by Abstraktius Artimus</p>
        </div>
            </div>
        </FeaturedSingleStyles>
        <FeaturedSingleStyles>
          <StaticImage
            className="features__item--img"
            src='../../images/single.jpeg'
            alt="featured single"
          />
            <div className="features__item--content">
              <h4>Track Title</h4>
              <p>Brief description of each track</p>
              <div >
          <a
            href="https://open.spotify.com/artist/36ZQelM5VwJYQ9MqY19aHT"
            target="_blank"
            rel="nofollow noreferrer noopener">
            <Button 
              as="span" 
              text="Listen Now" 
              arrow={true} 
              href="https://open.spotify.com/artist/36ZQelM5VwJYQ9MqY19aHT"
              target="_blank"
              rel="nofollow noreferrer noopener"
            />
          </a>
          <p>by Abstraktius Artimus</p>
        </div>
            </div>
        </FeaturedSingleStyles>

      </div>
      <div className="container container__tight learn__more">
        <Button as={Link} to="/comingsoon" text="All Singles" />
      </div>
    </FeaturedSinglesStyles>
  )
}

export default FeaturedSingles