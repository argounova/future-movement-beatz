import * as React from "react"
import { PostItemsStyles } from "./style"

const PostItems = ({ children }) => {
  return (
    <div className="container container__tight container__scroll">
      <PostItemsStyles>{children}</PostItemsStyles>
    </div>
  )
}

export default PostItems
