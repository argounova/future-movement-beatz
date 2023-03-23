import * as React from "react"
import { Link } from "gatsby"
import Button from "../components/Button"
import Layout from "../components/Layout"
import { 
    comingSoonDiv,
    comingSoonTitle,
    comingSoonInfo,
} from './ComingSoon/index.module.css'

const ComingSoon = () => {
    return (
        <Layout>
            <div className={comingSoonDiv}>
                <p className={comingSoonTitle}>Coming Soon</p>
                <p className={comingSoonInfo}>Bear with us as our new site is being built.</p>
                <Button
                    text="Home"
                    as={Link}
                    to="/"
                    arrow={true}
                />
            </div>
        </Layout>
    );
}

export default ComingSoon;