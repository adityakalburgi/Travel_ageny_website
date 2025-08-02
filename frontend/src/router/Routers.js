import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LazyWrapper from '../components/LazyWrapper/LazyWrapper'

// Lazy load all page components
const ThankYou = React.lazy(() => import('../pages/ThankYou'))
const Home = React.lazy(() => import('./../pages/Home'))
const Login = React.lazy(() => import('./../pages/Login'))
const Register = React.lazy(() => import('./../pages/Register'))
const SearchResultList = React.lazy(() => import('./../pages/SearchResultList'))
const TourDetails = React.lazy(() => import('./../pages/TourDetails'))
const Tours = React.lazy(() => import('./../pages/Tours'))
const ForgotPassword = React.lazy(() => import('../pages/ForgotPassword'))
const ResetPassword = React.lazy(() => import('../pages/ResetPassword'))

const Routers = () => {
   return (
      <Routes>
         <Route path='/' element={<Navigate to='/home'/>} />
         <Route path='/home' element={
            <LazyWrapper loadingText="Loading Home Page...">
               <Home/>
            </LazyWrapper>
         } />
         <Route path='/tours' element={
            <LazyWrapper loadingText="Loading Tours...">
               <Tours/>
            </LazyWrapper>
         } />
         <Route path='/tours/:id' element={
            <LazyWrapper loadingText="Loading Tour Details...">
               <TourDetails/>
            </LazyWrapper>
         } />
         <Route path='/login' element={
            <LazyWrapper loadingText="Loading Login...">
               <Login/>
            </LazyWrapper>
         } />
         <Route path='/register' element={
            <LazyWrapper loadingText="Loading Registration...">
               <Register/>
            </LazyWrapper>
         } />
         <Route path='/thank-you' element={
            <LazyWrapper loadingText="Loading...">
               <ThankYou/>
            </LazyWrapper>
         } />
         <Route path='/tours/search' element={
            <LazyWrapper loadingText="Loading Search Results...">
               <SearchResultList/>
            </LazyWrapper>
         } />
         <Route path='/forgot-password' element={
            <LazyWrapper loadingText="Loading...">
               <ForgotPassword/>
            </LazyWrapper>
         } />
         <Route path='/reset-password/:token' element={
            <LazyWrapper loadingText="Loading...">
               <ResetPassword/>
            </LazyWrapper>
         } />
      </Routes>
   )
}

export default Routers