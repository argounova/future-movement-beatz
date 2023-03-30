import * as React from "react"
import Button from "../Button/index"
import { Styles } from "./style"
import { Link } from "gatsby"

const TextBanner = ({ title, content, link, linkText }) => {
  return (
    <Styles className="section" style={{ marginTop: '20px', marginBottom: '30px' }}>
      <div className="container container__tight">
        <div>
          {title && <h2>{title}</h2>}
          {content && <p style={{ marginBottom: "20px" }}>{content}</p>}

          <Button text={linkText} as={Link} to="/comingsoon" />
        </div>
      </div>
    </Styles>
  )
}

export default TextBanner
