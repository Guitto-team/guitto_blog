import React, { Component } from 'react'
import Header from 'components/ui-projects/header'
import Footer from 'components/ui-projects/footer'
import Main from 'components/ui-projects/main'

import '../styles/reset.scss'
import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </>
  )
}

export default MyApp
