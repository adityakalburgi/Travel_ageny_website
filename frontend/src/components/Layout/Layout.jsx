import React, { useState } from 'react'
import Header from './../Header/Header'
import Routers from '../../router/Routers'
import Footer from './../Footer/Footer'
import InitialLoader from '../InitialLoader/InitialLoader'

const Layout = () => {
   const [isInitialLoading, setIsInitialLoading] = useState(true)

   const handleLoadingComplete = () => {
      setIsInitialLoading(false)
   }

   // Show initial loader on first app load
   if (isInitialLoading) {
      return <InitialLoader onLoadingComplete={handleLoadingComplete} />
   }

   return (
      <>
         <Header />
         <Routers />
         <Footer />      
      </>
   )
}

export default Layout