import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { VideoStyles } from "./style"

const Video = ({ videoSrcURL, videoTitle, ...props }) => {
    return(
        <VideoStyles>
            <StaticImage
                className="perks__image--bg"
                src="../../../static/smoke-background.jpg"
                alt="Perks Module"
                layout="constrained"
                placeholder="dominantColor"
            />
            <div className="perks__image--overlay"></div>
            <div className="container">
                <div className="video" style={{ padding: '50px' }}>
                    <iframe
                    src={videoSrcURL}
                    title={videoTitle}
                    width="560"
                    height="315"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
                    frameborder="0"
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    allowFullScreen
                    />
                </div>
            </div>
        </VideoStyles>
    )
}
export default Video