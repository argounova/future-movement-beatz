import * as React from "react"
import Navigation from "./Navigation/index"
import AnimMain from "./AnimMain/AnimMain"
import Footer from "./Footer/index"
import { motion } from "framer-motion"
import { GlobalStyle } from "../styles/GlobalStyles"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75 }}
      >
        <Navigation />
        <AnimMain>
          {children}
          <Footer />
        </AnimMain>
      </motion.div>
    </>
  )
}

export default Layout
