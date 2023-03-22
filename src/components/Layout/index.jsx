import * as React from "react"
import {
  pageImage,
  pageGradient,
} from './index.module.css'
import Navigation from '../Navigation/index'
import Footer from "../Footer/index"
import { GlobalStyle } from "../../styles/GlobalStyles"

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
                <main className={pageImage}>
                    <div className={pageGradient}>
                        <Navigation />
                        {children}
                        <Footer />
                    </div>
                </main>  
        </>
    )
}

export default Layout