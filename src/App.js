import './scss/App.scss';
import { useState } from 'react';

import Header from './components/Header';
import CapitalsTemp from './components/CapitalsTemp';
import CityInfo from './components/CityInfo';
import useSingleCity from './components/useSingleCity';

const App = () => {

  const { key } = useSingleCity();

  const [data, setData] = useState(null);
  const [city, setCity] = useState('');

  const fetchData = async (city) => {
    const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);
    const data = await res.json();

    if (!res.ok) throw Error('City not found. Try again.')

    setData(data);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    
    try {
      fetchData(city)

    } catch (err) {
      console.log(err.message)
    }
  };

  return (
    <>
      {!data && <h1 className="pdd-left title">Previsão do tempo</h1>}
      {data && <CityInfo data={data} />} 
      <Header 
        city={city}
        setCity={setCity}
        submitHandler={submitHandler}
      />
      <CapitalsTemp />
    </>
  );
};

export default App;