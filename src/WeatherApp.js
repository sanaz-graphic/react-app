import { useState } from 'react';
import { Search, Cloud, Sun, CloudRain, Wind, MapPin } from 'lucide-react';

function WeatherApp() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getWeather = async () => {
    if (city.trim() === '') {
      setError('لطفاً نام شهر را وارد کنید');
      return;
    }

    setLoading(true);
    setError('');
    setWeather(null);

    try {
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=fa`
      );
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        setError('شهر پیدا نشد. لطفاً نام دیگری امتحان کنید.');
        setLoading(false);
        return;
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherData = await weatherRes.json();

      setWeather({
        cityName: name,
        country: country,
        temperature: weatherData.current_weather.temperature,
        windSpeed: weatherData.current_weather.windspeed,
        weatherCode: weatherData.current_weather.weathercode,
      });
    } catch (err) {
      setError('خطا در دریافت اطلاعات. اتصال اینترنت را بررسی کنید.');
    } finally {
      setLoading(false);
    }
  };

  const getWeatherInfo = (code) => {
    if (code === 0) return { desc: 'آسمان صاف', icon: <Sun className="text-yellow-500" size={48} /> };
    if (code <= 3) return { desc: 'نیمه ابری', icon: <Cloud className="text-gray-500" size={48} /> };
    if (code <= 67) return { desc: 'بارانی', icon: <CloudRain className="text-blue-500" size={48} /> };
    return { desc: 'نامشخص', icon: <Cloud className="text-gray-500" size={48} /> };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 p-10 flex justify-center items-center">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          اپلیکیشن آب‌وهوا
        </h1>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && getWeather()}
            placeholder="نام شهر را بنویسید..."
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={getWeather}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition flex items-center gap-2"
          >
            <Search size={18} />
            جستجو
          </button>
        </div>

        {loading && (
          <p className="text-center text-gray-500 py-6">در حال دریافت اطلاعات...</p>
        )}

        {error && (
          <p className="text-center text-red-500 py-6">{error}</p>
        )}

        {weather && (
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
              <MapPin size={18} />
              <span>{weather.cityName}, {weather.country}</span>
            </div>
            <div className="mb-4 flex justify-center">
              {getWeatherInfo(weather.weatherCode).icon}
            </div>
            <p className="text-4xl font-bold text-gray-800 mb-2">
              {weather.temperature}°C
            </p>
            <p className="text-gray-600 mb-4">
              {getWeatherInfo(weather.weatherCode).desc}
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-500">
              <Wind size={18} />
              <span>سرعت باد: {weather.windSpeed} km/h</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherApp;