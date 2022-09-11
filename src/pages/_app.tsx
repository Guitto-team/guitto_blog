import React, { Component } from 'react'
import Header from 'components/header/header'
import Footer from 'components/footer/footer'

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
