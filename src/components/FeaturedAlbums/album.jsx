import * as React from "react"
import { AlbumStyles } from "./style"

const Perk = ({ children, title, content }) => {
  return (
    <AlbumStyles>
      {children}
      {title && <h3>{title}</h3>}
      {content && <p>{content}</p>}
    </AlbumStyles>
  )
}

export default Perk
