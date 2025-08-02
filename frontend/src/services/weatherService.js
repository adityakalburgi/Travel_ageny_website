// Weather API service
// Note: You need to get a free API key from https://openweathermap.org/api
const API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your actual API key
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Demo data for testing when API key is not configured
const DEMO_DATA = {
  'london': {
    name: 'London',
    sys: { country: 'GB' },
    dt: Math.floor(Date.now() / 1000),
    weather: [{ main: 'Clouds', description: 'scattered clouds', icon: '03d' }],
    main: {
      temp: 18,
      feels_like: 16,
      humidity: 72,
      pressure: 1015
    },
    wind: { speed: 4.1 },
    visibility: 10000,
    forecast: [
      { dt: Math.floor(Date.now() / 1000) + 86400, weather: [{ main: 'Rain', description: 'light rain', icon: '10d' }], main: { temp: 15 } },
      { dt: Math.floor(Date.now() / 1000) + 172800, weather: [{ main: 'Clear', description: 'clear sky', icon: '01d' }], main: { temp: 20 } },
      { dt: Math.floor(Date.now() / 1000) + 259200, weather: [{ main: 'Clouds', description: 'broken clouds', icon: '04d' }], main: { temp: 17 } },
      { dt: Math.floor(Date.now() / 1000) + 345600, weather: [{ main: 'Rain', description: 'moderate rain', icon: '10d' }], main: { temp: 14 } },
      { dt: Math.floor(Date.now() / 1000) + 432000, weather: [{ main: 'Clear', description: 'clear sky', icon: '01d' }], main: { temp: 22 } }
    ]
  },
  'paris': {
    name: 'Paris',
    sys: { country: 'FR' },
    dt: Math.floor(Date.now() / 1000),
    weather: [{ main: 'Clear', description: 'clear sky', icon: '01d' }],
    main: {
      temp: 22,
      feels_like: 24,
      humidity: 65,
      pressure: 1013
    },
    wind: { speed: 2.5 },
    visibility: 10000,
    forecast: [
      { dt: Math.floor(Date.now() / 1000) + 86400, weather: [{ main: 'Clear', description: 'clear sky', icon: '01d' }], main: { temp: 25 } },
      { dt: Math.floor(Date.now() / 1000) + 172800, weather: [{ main: 'Clouds', description: 'few clouds', icon: '02d' }], main: { temp: 23 } },
      { dt: Math.floor(Date.now() / 1000) + 259200, weather: [{ main: 'Rain', description: 'light rain', icon: '10d' }], main: { temp: 19 } },
      { dt: Math.floor(Date.now() / 1000) + 345600, weather: [{ main: 'Clear', description: 'clear sky', icon: '01d' }], main: { temp: 26 } },
      { dt: Math.floor(Date.now() / 1000) + 432000, weather: [{ main: 'Clouds', description: 'scattered clouds', icon: '03d' }], main: { temp: 24 } }
    ]
  },
  'new york': {
    name: 'New York',
    sys: { country: 'US' },
    dt: Math.floor(Date.now() / 1000),
    weather: [{ main: 'Rain', description: 'moderate rain', icon: '10d' }],
    main: {
      temp: 12,
      feels_like: 10,
      humidity: 85,
      pressure: 1008
    },
    wind: { speed: 6.2 },
    visibility: 8000,
    forecast: [
      { dt: Math.floor(Date.now() / 1000) + 86400, weather: [{ main: 'Clouds', description: 'overcast clouds', icon: '04d' }], main: { temp: 14 } },
      { dt: Math.floor(Date.now() / 1000) + 172800, weather: [{ main: 'Clear', description: 'clear sky', icon: '01d' }], main: { temp: 18 } },
      { dt: Math.floor(Date.now() / 1000) + 259200, weather: [{ main: 'Clear', description: 'clear sky', icon: '01d' }], main: { temp: 20 } },
      { dt: Math.floor(Date.now() / 1000) + 345600, weather: [{ main: 'Clouds', description: 'few clouds', icon: '02d' }], main: { temp: 16 } },
      { dt: Math.floor(Date.now() / 1000) + 432000, weather: [{ main: 'Rain', description: 'light rain', icon: '10d' }], main: { temp: 13 } }
    ]
  }
};

export const weatherService = {
  // Check if API key is configured
  isApiKeyConfigured() {
    return API_KEY !== 'YOUR_API_KEY_HERE' && API_KEY.length > 0;
  },

  // Get current weather for a city
  async getCurrentWeather(city) {
    // Use demo data if API key is not configured
    if (!this.isApiKeyConfigured()) {
      const demoCity = city.toLowerCase();
      if (DEMO_DATA[demoCity]) {
        return DEMO_DATA[demoCity];
      }
      throw new Error('City not found. Try: London, Paris, or New York');
    }

    try {
      const response = await fetch(
        `${API_BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
      );
      
      if (!response.ok) {
        throw new Error('City not found. Please check the spelling and try again.');
      }
      
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  // Get 5-day forecast for a city
  async getForecast(city) {
    // Use demo data if API key is not configured
    if (!this.isApiKeyConfigured()) {
      const demoCity = city.toLowerCase();
      if (DEMO_DATA[demoCity]) {
        return { list: DEMO_DATA[demoCity].forecast };
      }
      throw new Error('Forecast data not available.');
    }

    try {
      const response = await fetch(
        `${API_BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
      );
      
      if (!response.ok) {
        throw new Error('Forecast data not available.');
      }
      
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  // Get both current weather and forecast
  async getWeatherData(city) {
    try {
      if (!this.isApiKeyConfigured()) {
        // Use demo data
        const demoCity = city.toLowerCase();
        if (DEMO_DATA[demoCity]) {
          return DEMO_DATA[demoCity];
        }
        throw new Error('City not found. Try: London, Paris, or New York');
      }

      const [currentWeather, forecast] = await Promise.all([
        this.getCurrentWeather(city),
        this.getForecast(city)
      ]);

      return {
        ...currentWeather,
        forecast: forecast.list
      };
    } catch (error) {
      throw error;
    }
  },

  // Get weather icon URL
  getWeatherIcon(iconCode) {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  },

  // Format date from timestamp
  formatDate(timestamp) {
    return new Date(timestamp * 1000).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  },

  // Format time from timestamp
  formatTime(timestamp) {
    return new Date(timestamp * 1000).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  },

  // Get travel advice based on weather conditions
  getTravelAdvice(weatherData) {
    const temp = weatherData.main.temp;
    const weatherMain = weatherData.weather[0].main.toLowerCase();
    
    if (temp < 10) {
      return "Pack warm clothes! It's quite cold.";
    } else if (temp > 25) {
      return "Don't forget sunscreen and stay hydrated!";
    } else if (weatherMain.includes('rain')) {
      return "Bring an umbrella or raincoat!";
    } else if (weatherMain.includes('snow')) {
      return "Bundle up! Snow is expected.";
    } else {
      return "Perfect weather for traveling!";
    }
  },

  // Get demo mode status
  getDemoModeStatus() {
    return !this.isApiKeyConfigured();
  }
};

export default weatherService; 