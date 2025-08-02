import React, { useState } from 'react';
import './search-bar.css';
import { FaMapMarkerAlt, FaRulerHorizontal, FaUsers, FaSearch } from 'react-icons/fa';

const SearchForm = () => {
  const [destination, setDestination] = useState('');
  const [distance, setDistance] = useState('');
  const [maxPeople, setMaxPeople] = useState(0);
    const handlePeopleChange = (e) => {
    const value = e.target.value;
    // Only allow positive integers
    if (value === '' || (/^\d+$/.test(value) && parseInt(value) >= 0)) {
      setMaxPeople(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log({ destination, distance, maxPeople });
  };

  return (
    <div className="search-form-container">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="input-group">
          <div className="input-icon">
            <FaMapMarkerAlt />
          </div>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Where are you going?"
            className="search-input"
          />
        </div>
        
        <div className="input-group">
          <div className="input-icon">
            <FaRulerHorizontal />
          </div>
          <input
            type="text"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            placeholder="Distance km"
            className="search-input"
          />
        </div>
        
        <div className="input-group">
          <div className="input-icon">
            <FaUsers />
          </div>
          <input
            type="text"
            inputMode="numeric"
            pattern="\d*"
            value={maxPeople}
            onChange={handlePeopleChange}
            placeholder="Max People"
            className="search-input"
          />
        </div>
        
        <button type="submit" className="search-button">
          <FaSearch />
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};

export default SearchForm;