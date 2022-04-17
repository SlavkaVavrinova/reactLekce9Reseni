import React, { useEffect, useState } from 'react';
import './style.css';

/* 1 část
const WorldTime = () => {
  useEffect(() => {
    alert('Spuštěno');
  }, []);

  return <h1>Pokus</h1>;
};*/

/* 2. část 
const WorldTime = () => {
  const [datetime, setDatetime] = useState('');

  useEffect(() => {
    setDatetime('2020-11-13T22:46');
  }, []);
  return <h1>{datetime}</h1>;
};
*/

/* 3. část
const WorldTime = () => {
  const [datetime, setDatetime] = useState('');

  useEffect(() => {
    fetch('https://worldtimeapi.org/api/timezone/Europe/Prague')
      .then((response) => response.json())
      .then((data) => setDatetime(data.datetime));
  }, []);
  return <h1>{datetime}</h1>;
};
*/

// 4. část - výběr časové zóny

const WorldTime = () => {
  const [datetime, setDatetime] = useState('');
  const [timezone, setTimezone] = useState('Europe/Prague');

  const handleTimezoneChange = (event) => {
    setTimezone(event.target.value);
  };

  useEffect(() => {
    fetch(`https://worldtimeapi.org/api/timezone/${timezone}`)
      .then((response) => response.json())
      .then((data) => setDatetime(data.datetime));
  }, [timezone]);

  return (
    <div className="wrapper">
      <h1>Čas</h1>
      <p>{datetime}</p>
      <select onChange={handleTimezoneChange} value={timezone}>
        <option value="Europe/Prague">Praha</option>
        <option value="America/New_York">New York</option>
        <option value="Europe/London">Londýn</option>
        <option value="Europe/Moscow">Moskva</option>
        <option value="Asia/Hong_Kong">Hong Kong</option>
        <option value="Asia/Jerusalem">Jeruzalém</option>
      </select>
    </div>
  );
};

export default WorldTime;
