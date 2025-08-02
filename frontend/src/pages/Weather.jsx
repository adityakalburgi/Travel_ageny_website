import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Button, Card, CardBody, Alert } from 'reactstrap';
import { FaSearch, FaMapMarkerAlt, FaThermometerHalf, FaTint, FaWind, FaEye } from 'react-icons/fa';
import weatherService from '../services/weatherService';
import '../styles/weather.css';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);

  const searchWeather = async (searchCity) => {
    if (!searchCity.trim()) {
      setError('Please enter a city name');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const weatherData = await weatherService.getWeatherData(searchCity);
      setWeather(weatherData);
      
      // Add to recent searches
      if (!recentSearches.includes(searchCity)) {
        setRecentSearches(prev => [searchCity, ...prev.slice(0, 4)]);
      }
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchWeather(city);
  };

  const handleRecentSearch = (recentCity) => {
    setCity(recentCity);
    searchWeather(recentCity);
  };

  const getWeatherIcon = weatherService.getWeatherIcon;
  const formatDate = weatherService.formatDate;
  const formatTime = weatherService.formatTime;
  const getWeatherAdvice = weatherService.getTravelAdvice;

  return (
    <div className="weather-page">
      <Container>
        <Row>
          <Col lg="12">
            <div className="weather-header text-center mb-5">
              <h2>🌤️ Weather Calculator</h2>
              <p>Check the weather for your travel destination</p>
              {weatherService.getDemoModeStatus() && (
                <div className="demo-badge">
                  <span>DEMO MODE</span>
                </div>
              )}
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg="8" md="10" className="mx-auto">
            {/* Search Form */}
            <Card className="search-card mb-4">
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md="8">
                      <FormGroup>
                        <div className="search-input-group">
                          <FaMapMarkerAlt className="search-icon" />
                          <Input
                            type="text"
                            placeholder="Enter city name..."
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="search-input"
                          />
                        </div>
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <Button
                        type="submit"
                        color="primary"
                        className="w-100 search-btn"
                        disabled={loading}
                      >
                        {loading ? 'Searching...' : (
                          <>
                            <FaSearch /> Search
                          </>
                        )}
                      </Button>
                    </Col>
                  </Row>
                </Form>

                {/* Recent Searches */}
                {recentSearches.length > 0 && (
                  <div className="recent-searches mt-3">
                    <small className="text-muted">Recent searches:</small>
                    <div className="recent-tags">
                      {recentSearches.map((search, index) => (
                        <span
                          key={index}
                          className="recent-tag"
                          onClick={() => handleRecentSearch(search)}
                        >
                          {search}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </CardBody>
            </Card>

            {/* Error Message */}
            {error && (
              <Alert color="danger" className="mb-4">
                {error}
              </Alert>
            )}

            {/* Weather Display */}
            {weather && (
              <div className="weather-results">
                {/* Current Weather */}
                <Card className="current-weather-card mb-4">
                  <CardBody>
                    <Row>
                      <Col md="6">
                        <div className="current-weather-info">
                          <h3>{weather.name}, {weather.sys.country}</h3>
                          <p className="weather-date">
                            {formatDate(weather.dt)} at {formatTime(weather.dt)}
                          </p>
                          <div className="weather-main">
                            <img
                              src={getWeatherIcon(weather.weather[0].icon)}
                              alt={weather.weather[0].description}
                              className="weather-icon"
                            />
                            <div>
                              <h2 className="temperature">
                                {Math.round(weather.main.temp)}°C
                              </h2>
                              <p className="weather-description">
                                {weather.weather[0].description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="weather-details">
                          <div className="detail-item">
                            <FaThermometerHalf />
                            <span>Feels like: {Math.round(weather.main.feels_like)}°C</span>
                          </div>
                          <div className="detail-item">
                            <FaTint />
                            <span>Humidity: {weather.main.humidity}%</span>
                          </div>
                          <div className="detail-item">
                            <FaWind />
                            <span>Wind: {Math.round(weather.wind.speed)} m/s</span>
                          </div>
                          <div className="detail-item">
                            <FaEye />
                            <span>Visibility: {Math.round(weather.visibility / 1000)} km</span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>

                {/* Travel Advice */}
                <Card className="advice-card mb-4">
                  <CardBody>
                    <h5>💡 Travel Advice</h5>
                    <p>{getWeatherAdvice(weather)}</p>
                  </CardBody>
                </Card>

                {/* 5-Day Forecast */}
                {weather.forecast && (
                  <Card className="forecast-card">
                    <CardBody>
                      <h5>📅 5-Day Forecast</h5>
                      <Row>
                        {weather.forecast
                          .filter((item, index) => index % 8 === 0) // Get one reading per day
                          .slice(0, 5)
                          .map((item, index) => (
                            <Col key={index} className="forecast-item">
                              <div className="forecast-day">
                                <p className="forecast-date">
                                  {formatDate(item.dt)}
                                </p>
                                <img
                                  src={getWeatherIcon(item.weather[0].icon)}
                                  alt={item.weather[0].description}
                                  className="forecast-icon"
                                />
                                <p className="forecast-temp">
                                  {Math.round(item.main.temp)}°C
                                </p>
                                <p className="forecast-desc">
                                  {item.weather[0].description}
                                </p>
                              </div>
                            </Col>
                          ))}
                      </Row>
                    </CardBody>
                  </Card>
                )}
              </div>
            )}

            {/* Demo Message */}
            {!weather && !loading && !error && (
              <Card className="demo-card">
                <CardBody className="text-center">
                  <h5>🌍 Ready to check the weather?</h5>
                  <p>Enter a city name above to get current weather conditions and a 5-day forecast.</p>
                  {weatherService.getDemoModeStatus() ? (
                    <div className="demo-info">
                      <p className="text-info">
                        <strong>Demo Mode:</strong> Currently using sample data. 
                        Try searching for: <strong>London</strong>, <strong>Paris</strong>, or <strong>New York</strong>
                      </p>
                      <p className="text-muted small">
                        To get real weather data, replace 'YOUR_API_KEY_HERE' in the weatherService.js file with your OpenWeatherMap API key.
                      </p>
                    </div>
                  ) : (
                    <p className="text-muted small">
                      <strong>Live Mode:</strong> Connected to OpenWeatherMap API for real-time weather data.
                    </p>
                  )}
                </CardBody>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Weather; 