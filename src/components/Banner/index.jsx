import * as React from "react"
import { Link } from "gatsby"
import { Styles } from "./style"
import { StaticImage } from "gatsby-plugin-image"
import Button from "../Button/index"

const Banner = ({ children, title, subTitle, contact }) => {
  return (
    <>
      <Styles>
      {children ? (
          children
        ) : (
          <StaticImage
            className="banner__image"
            imgClassName="banner__image--content"
            src="../../../static/background1.jpg"
            alt="Banner Image"
            layout="fullWidth"
            placeholder="blurred"
          />
        )}
        <div className="container">
          <div className="banner__content">
            {title && <h1>{title}</h1>}
            {subTitle && <h2>{subTitle}</h2>}
            <div className="banner__btns">
              {contact
                ? <Button
                    className="btn"
                    text="Get In Touch"
                    as={Link}
                    to="/contact"
                  />
                : <Button
                  className="btn"
                  text="Learn More"
                  as={Link}
                  to="/about"
                  />
              }
            </div>
          </div>
        </div>
      </Styles>
      <span id="topContent"></span>
    </>
  )
}

export default Banner