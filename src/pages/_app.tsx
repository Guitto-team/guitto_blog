import React, { Component } from 'react'
import { AnimatePresence } from 'framer-motion'

import '../styles/reset.scss'
import '../styles/global.scss'

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
        <Component key={router.asPath} {...pageProps} />
      </AnimatePresence>
    </>
  )
}

export default MyApp
