   import React from 'react'
   import Header from './../Header/Header'
   import Routers from '../../router/Routers'
   import Footer from './../Footer/Footer'
   import ScrollToTop from '../ScrollToTop/ScrollToTop'
   import ChatBot from '../Chatbot/Chatbot'
   import '../Chatbot/chatbot.css'; 

   const Layout = () => {
      return (
         <>
            <Header />
            <Routers />
            <Footer />
            <ScrollToTop />
            <ChatBot/>
         </>
      )
   }

   export default Layout