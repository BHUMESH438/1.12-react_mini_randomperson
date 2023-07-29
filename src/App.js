import React, { useState, useEffect } from 'react';
import { FaEnvelopeOpen, FaUser, FaCalendarTimes, FaMap, FaPhone, FaLock } from 'react-icons/fa';
const url = 'https://randomuser.me/api/';
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg';
function App() {
  const [loading, setloading] = useState(true);
  const [person, setperson] = useState(true);
  const [title, settitle] = useState('name');
  const [value, setvalue] = useState('random person');

  const getPerson = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const person = data.results[0];
    console.log(person);
    const {
      email,
      phone,
      name,
      picture: { large: image }, //nested and assing new name to the obj
      login: { password },
      dob: { age },
      //deep nesting
      location: {
        street: { number, name: streetname }
      }
    } = person;
    const newperson = { email, phone, image, password, age, street: `${number}-${streetname}` };
    setperson(newperson); //if we had a fetch we should have a loading util our data is loaded
    setloading(false);
    settitle(newperson.name);
    setvalue(`${name.first}_${name.last}`);
  };
  useEffect(() => {
    getPerson();
  }, []);
  const handleValue = e => {
    if (e.target.classList.contains('icon')) {
      const newValue = e.target.dataset.label;
      settitle(newValue);
      setvalue(person[newValue]); //bracket notation
    }
  };

  return (
    <main>
      <div className='block bcg-black'> </div>
      <div className='block'>
        <div className='container'>
          <img src={person?.image || defaultImage} alt='random user' className='user-img' />
          <p className='user-title'>my {title} is</p>
          <p className='user-value'>{value}</p>
          <div className='values-list'>
            <button className='icon' data-label='name' onMouseOver={handleValue}>
              <FaUser />
            </button>
            <button className='icon' data-label='email' onMouseOver={handleValue}>
              <FaEnvelopeOpen />
            </button>
            <button className='icon' data-label='age' onMouseOver={handleValue}>
              <FaCalendarTimes />
            </button>
            <button className='icon' data-label='street' onMouseOver={handleValue}>
              <FaMap />
            </button>
            <button className='icon' data-label='phone' onMouseOver={handleValue}>
              <FaPhone />
            </button>
            <button className='icon' data-label='password' onMouseOver={handleValue}>
              <FaLock />
            </button>
          </div>
          <button className='btn' type='button' onClick={getPerson}>
            {loading ? 'loading....' : 'random user'}
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
