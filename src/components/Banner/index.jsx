import * as React from "react"
import { navigate } from "gatsby"
import { Styles } from "./style"
// import { StaticImage } from "gatsby-plugin-image"
import Button from "../Button/index"

const Banner = ({ title, subTitle }) => {
  function scrollToArea() {
    navigate("#topContent")
  }

  return (
    <>
      <Styles>
        <div className="container">
          <div className="banner__content">
            {title && <h1>{title}</h1>}
            {subTitle && <h2>{subTitle}</h2>}
            <div className="banner__btns">
              <Button onClick={scrollToArea} text="Learn More" />
            </div>
          </div>
        </div>
      </Styles>
      <span id="topContent"></span>
    </>
  )
}

export default Banner