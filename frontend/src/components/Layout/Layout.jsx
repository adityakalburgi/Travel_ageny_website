import React from 'react'
import Header from './../Header/Header'
import Routers from '../../router/Routers'
import Footer from './../Footer/Footer'
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
         </div>
      </>
   )
}

export default Layout