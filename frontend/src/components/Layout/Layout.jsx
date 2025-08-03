import React from 'react'
import Header from './../Header/Header'
import Routers from '../../router/Routers'
import Footer from './../Footer/Footer'
import ScrollToTop from '../ScrollToTop/ScrollToTop'

const Layout = () => {
   return (
      <>
         <Header />
         <Routers />
         <Footer />
         <ScrollToTop />
      </>
   )
}

export default Layout