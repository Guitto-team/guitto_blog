import React, { Component } from 'react'
import Header from 'components/ui-projects/header'
import Footer from 'components/ui-projects/footer'

import '../styles/reset.scss'
import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
