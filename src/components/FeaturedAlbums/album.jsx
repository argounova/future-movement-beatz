import * as React from "react"
import { AlbumStyles } from "./style"
import Button from "../Button/index"

const Album = ({ children, title, content }) => {
  return (
    <AlbumStyles>
      {children}
      {title && <h3>{title}</h3>}
      {content && 
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
          }
    </AlbumStyles>
  )
}

export default Album
