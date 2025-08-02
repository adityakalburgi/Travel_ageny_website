

import React, { useRef, useState } from 'react'
import './search-bar.css'
import { Col, Form, FormGroup } from 'reactstrap'
import { BASE_URL } from '../utils/config'
import { useNavigate } from 'react-router-dom'
import { FaMapMarkerAlt, FaRulerHorizontal, FaUsers, FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const [destination, setDestination] = useState('');
  const [distance, setDistance] = useState('');
  const [maxPeople, setMaxPeople] = useState(0);
  const locationRef = useRef();
  const distanceRef = useRef();
  const maxGroupSizeRef = useRef();
  const navigate = useNavigate();
    const handlePeopleChange = (e) => {
    const value = e.target.value;
    // Only allow positive integers
    if (value === '' || (/^\d+$/.test(value) && parseInt(value) >= 0)) {
      setMaxPeople(value);
    }
  };

   const [errors, setErrors] = useState({
      location: '',
      distance: '',
      maxGroupSize: '',
   })

   const searchHandler = async () => {
      const location = locationRef.current.value.trim()
      const distance = distanceRef.current.value.trim()
      const maxGroupSize = maxGroupSizeRef.current.value.trim()

      const newErrors = {
         location: location === '' ? 'Location is required' : '',
         distance: distance === '' ? 'Distance is required' : '',
         maxGroupSize: maxGroupSize === '' ? 'Max group size is required' : '',
      }

      setErrors(newErrors)

      // Stop execution if there are any validation errors
      if (Object.values(newErrors).some(error => error !== '')) {
         return
      }

      const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`)
      const result = await res.json()

      navigate(`/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`, { state: result.data })
   }

   return (
      <Col lg="12">
         <div className="search__bar">
            <Form className='d-flex align-items-center gap-4' onSubmit={(e) => e.preventDefault()}>
               <FormGroup className='d-flex flex-column form__group form__group-fast'>
                  <div className="d-flex gap-3">
                     <span><i className='ri-map-pin-line'></i></span>
                     <div>
                        <h6>Location</h6>
                        <input type="text" placeholder='Where are you going?' ref={locationRef} className={errors.location ? 'input-error' : ''} />
                        {errors.location && <small style={{display:'block',color:'#7e7979ff',}}> &#9888; {errors.location}</small>}
                     </div>
                  </div>
               </FormGroup>

               <FormGroup className='d-flex flex-column form__group form__group-fast'>
                  <div className="d-flex gap-3">
                     <span><i className='ri-map-pin-time-line'></i></span>
                     <div>
                        <h6>Distance</h6>
                        <input type="number" placeholder='Distance k/m' ref={distanceRef} className={errors.distance ? 'input-error' : ''} />
                        {errors.distance && <small style={{display:'block',color:'#7e7979ff',}}> &#9888; {errors.distance}</small>}
                     </div>
                  </div>
               </FormGroup>

               <FormGroup className='d-flex flex-column form__group form__group-last'>
                  <div className="d-flex gap-3">
                     <span><i className='ri-group-line'></i></span>
                     <div>
                        <h6>Max People</h6>
                        <input type="number" placeholder='0' ref={maxGroupSizeRef} className={errors.maxGroupSize ? 'input-error' : ''} />
                        {errors.maxGroupSize && <small style={{display:'block',color:'#7e7979ff',}}> &#9888; {errors.maxGroupSize}</small>}
                     </div>
                  </div>
               </FormGroup>

               <span className='search__icon' onClick={searchHandler}>
                  <i className='ri-search-line'></i>
               </span>
            </Form>
         </div>
      </Col>
   )
}

export default SearchBar;

