import * as React from "react"
import Button from "../Button/index"
import { PostItemStyles } from "./style"

const BlogItem = () => {
  return (
    <PostItemStyles >
      <h4>Track Title</h4>
      <p>Brief description of each track</p>
      <div className="blogitem__meta">
        <Button as="span" text="Listen Now" arrow={true} />
        <p>by Abstraktius Artimus</p>
      </div>
    </PostItemStyles>
  )
}

export default BlogItem
