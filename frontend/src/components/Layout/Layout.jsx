
import React from 'react'
import Header from './../Header/Header'
import Routers from '../../router/Routers'
import Footer from './../Footer/Footer'
import ScrollToTop from '../ScrollToTop/ScrollToTop'

import "./Layout.css"



const Layout = () => {
   return (


      <>
      <div className='app-container'>


         <Header />
         <main className='main-content'>
         <Routers />


         </main>
         <Footer />   
      <ScrollToTop />
         </div>
      </>
   )


}

export default Layout
