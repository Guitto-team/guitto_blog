import React, { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import TagManager from 'react-gtm-module'

import '../styles/reset.scss'
import '../styles/global.scss'

function MyApp({ Component, pageProps, router }) {
  // Google Tag Manager start
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-W3ZXMH8' })
  }, [])

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])
  // Google Tag Manager end

  return (
    <>
      <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
        <Component key={router.asPath} {...pageProps} />
      </AnimatePresence>
    </>
  )
}

export default MyApp
