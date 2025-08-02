
import React, { useContext } from 'react';
import Header from './../Header/Header';
import Routers from '../../router/Routers';
import Footer from './../Footer/Footer';
import { ThemeContext } from '../../context/ThemeContext'; // import context
import "./Layout.css"


const Layout = () => {
   const { theme } = useContext(ThemeContext); // get current theme

   return (

      <>
      <div className='app-container {theme}'>


         <Header />
         <main className='main-content'>
         <Routers />

         </main>
         <Footer />      
         </div>
      </>
   )

}

export default Layout;
