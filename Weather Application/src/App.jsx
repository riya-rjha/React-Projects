import React from 'react';
import { useState } from 'react';

const App = () => {

  const [city, setCity] = useState('');
  const [minTemp, setMinTemp] = useState(0);
  const [maxTemp, setMaxTemp] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [weather, setWeather] = useState('');
  const [wind, setWind] = useState(0);
  const [pressure, setPressure] = useState(0);
  const [img, setImg] = useState('clear');
  // rain, drizzle, mist, haze, clear, snow

  const apiURL = 'https://api.openweathermap.org/data/2.5/weather??&q=';
  const apiKey = 'f0c6705196f619ade42477fd94afff1c';

  const getData = async (city_name) => {
    const details = await fetch(apiURL + city_name + `&appid=${apiKey}`);
    const data = await details.json();
    setMinTemp(data.main.temp_min);
    setMaxTemp(data.main.temp_max);
    setHumidity(data.main.humidity);
    setPressure(data.main.pressure);
    setWeather(data.weather[0].description);
    setWind(data.wind.speed);
    setImg((data.weather[0].main).toLowerCase());
    console.log(img);
  }

  const weatherTypeImages = {
    rain: 'rain.jpg',
    drizzle: 'drizzle.jpg',
    mist: 'mist.jpg',
    haze: 'haze.jpg',
    clear: 'clear.jpg',
    snow: 'snow.jpg',
  };


  return (

    <div className='min-h-[100vh] bg-yellow-200 min-w-fit flex items-center flex-col gap-[30px]'>
      <div className="flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 shadow-2xl mt-[5%] pl-[60px] pr-[60px] pt-[15px] pb-[15px] rounded-xl gap-[15px]">
        <input
          type="text"
          className="flex-1 border-0 outline-none
          rounded-lg w-[250px] -ml-[15px] p-[10px]
          "
          placeholder='Enter Location'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className="border-0 outline-none p-[5px] text-[20px] font-semibold
          rounded-md bg-gray-200 pl-[5px] pr-[5px] duration-100 hover:bg-slate-500 hover:text-white
          "
          onClick={() => getData(city)}
        >
          Submit
        </button>
      </div>
      <div
        className="flex items-center justify-center flex-col
        bg-gradient-to-r from-green-400 to-blue-500 shadow-2xl p-[28px] rounded-xl"
      >
        <h2 className='uppercase text-[32px] font-semibold'>{city}</h2>
        <div className="flex items-center justify-around gap-[30px]">
          <div>
            <h2 className='text-[22px] font-semibold text-purple-950'>Min Temperature : <span className='text-[20px] font-medium text-white'>{minTemp} °F</span></h2>
            <h2 className='text-[22px] font-semibold text-purple-950'>Max Temperature : <span className='text-[20px] font-medium text-white'>{maxTemp} °F</span></h2>
          </div>
          <img src={`./Images/${img}.png`} alt="Image" className='w-[100px] h-[100px]' />
        </div>
        <h1 className='uppercase mt-[30px] text-3xl font-bold text-red-500'>{weather}</h1>
        <div className='mr-[148px] mt-[10px]'>
          <h3 className='text-[22px] font-semibold text-purple-950'>Pressure : <span className='text-[20px] font-medium text-white text-center'>{pressure}</span></h3>
          <h3 className='text-[22px] font-semibold text-purple-950'>Humidity : <span className='text-[20px] font-medium text-white'>{humidity}</span></h3>
          <h3 className='text-[22px] font-semibold text-purple-950'>Wind Speed : <span className='text-[20px] font-medium text-white'>{wind} km/hr</span></h3>
        </div>
      </div>
    </div>
  )
}

export default App;
