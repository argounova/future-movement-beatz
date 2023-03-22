import React from "react"
import { Link } from "gatsby"
import PostItems from "./PostItems"
import PostItem from "./PostItem"
import Button from "../Button/index"

const LatestSingles = ({ title, introduction }) => {
  return (
    <div className="section">
      <div className="container container__tight">
        {title || introduction ? (
          <div className="intro__area">
            {title && (
              <h2>
                {title}
              </h2>
            )}
            {introduction && <p>{introduction}</p>}
          </div>
        ) : null}
        <PostItems>
          <PostItem />
          <PostItem />
          <PostItem />
        </PostItems>
        <div className="learn__more">
          <Button text="All Singles" as={Link} to="/singles" />
        </div>
      </div>
    </div>
  )
}

export default LatestSingles