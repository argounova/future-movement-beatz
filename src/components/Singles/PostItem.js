import * as React from "react"
import Button from "../Button/index"
import { PostItemStyles } from "./style"
import { StaticImage } from "gatsby-plugin-image"

const BlogItem = () => {
  return (
    <div className="container container__tight">

    <PostItemStyles >
      <StaticImage
        className="singles__item--img"
        src='../../images/single.jpeg'
        alt="album artwork"
      />
      <div className="singles__item--content">
        <h4>Track Title</h4>
        <p>Brief description of each track</p>
        <div className="blogitem__meta">
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
    </PostItemStyles>
    </div>
  )
}

export default BlogItem
