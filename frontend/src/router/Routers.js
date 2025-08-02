import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ThankYou from '../pages/ThankYou'
import Home from './../pages/Home'
import About from './../pages/About'
import Login from './../pages/Login'
import Register from './../pages/Register'
import SearchResultList from './../pages/SearchResultList'
import TourDetails from './../pages/TourDetails'
import Tours from './../pages/Tours'
import ForgotPassword from '../pages/ForgotPassword'
import ResetPassword from '../pages/ResetPassword'

// ✅ Import the CustomerReviews page
import CustomerReviews from '../pages/CustomerReviews'

const Routers = () => {
   return (
      <Routes>

         <Route path='/' element={<Navigate to='/home' />} />
         <Route path='/home' element={<Home />} />
           <Route path='/about' element={<About/>}/>
         <Route path='/tours' element={<Tours />} />
         <Route path='/tours/:id' element={<TourDetails />} />
         <Route path='/login' element={<Login />} />
         <Route path='/register' element={<Register />} />
         <Route path='/thank-you' element={<ThankYou />} />
         <Route path='/tours/search' element={<SearchResultList />} />
         <Route path='/forgot-password' element={<ForgotPassword />} />
         <Route path='/reset-password/:token' element={<ResetPassword />} />
         
         {/* ✅ Add this new full-page route */}
         <Route path='/reviews' element={<CustomerReviews />} />

      </Routes>
   )
}

export default Routers
