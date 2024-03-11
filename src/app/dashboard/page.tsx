"use client"
import { useState, useEffect } from 'react';
import { auth, currentUser } from '@clerk/nextjs';

import Image from 'next/image';
import styles from './dashboard.module.css';

const DashBoardPage = () => {
  //const user = await currentUser();
  const [year, setYear] = useState('');
  const [color, setColor] = useState('');
  const [price, setPrice] = useState('');
  const [images, setImages] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({ year: '', color: '', price: '' });

  useEffect(() => {
    fetch(`/api/images?year=${year}&color=${color}&price=${price}`)
      .then(response => response.json())
      .then(data => setImages(data));
    }, [selectedOptions]);

    const handleButtonClick = () => {
      setSelectedOptions({ year, color, price });
    };

  return (
    <div className="main">
      <div className={styles.user}>Hello, {auth.user?.lastName} {auth.user?.firstName}!</div>
      <div>
        <select value={year} onChange={e => setYear(e.target.value)}>
        <option value="">Select a year</option>
  <option value="2018">2018</option>
  <option value="2019">2019</option>
        </select>
        <select value={color} onChange={e => setColor(e.target.value)}>
        <option value="red">red</option>
  <option value="green">green</option>
        </select>
        <input type="number" value={price} onChange={e => setPrice(e.target.value)} />
        <button onClick={handleButtonClick}>Enter</button>
      </div>

      {/*}
      <div className={styles.main}>
        {images.map((image, index) => (
          <Image 
            key={index} 
            src={image.url} 
            alt={image.description} 
            width={500} // replace with your desired width
            height={300} // replace with your desired height
            className={styles.image}
          />
        ))}
      </div>
        */}
    </div>
  );
};

export default DashBoardPage;