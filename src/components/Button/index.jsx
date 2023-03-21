import * as React from "react"
import { MdArrowForward as Arrow } from "react-icons/md"
import { Styles } from "./style"

const Button = ({ text, to, as, arrow }) => {
  return (
    <Styles className="btn" as={as} to={to}>
      {text}
      {arrow || to ?
        <Arrow style={{ marginLeft: "10px" }} />
       : null }
    </Styles>
  )
}

export default Button
