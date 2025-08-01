import React, { useContext } from 'react';
import Header from './../Header/Header';
import Routers from '../../router/Routers';
import Footer from './../Footer/Footer';
import { ThemeContext } from '../../context/ThemeContext'; // import context

const Layout = () => {
   const { theme } = useContext(ThemeContext); // get current theme

   return (
      <div className={theme}> {/* Apply theme class to the root wrapper */}
         <Header />
         <Routers />
         <Footer />
      </div>
   );
}

export default Layout;
