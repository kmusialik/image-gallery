
import styles from './page.module.css';
import Link from 'next/link';
//import React from 'react';
import Image from 'next/image';
import image1 from '../../public/images/4/1.jpeg';
import image2 from '../../public/images/4/2.jpeg';
import image3 from '../../public/images/4/3.jpeg';
import image4 from '../../public/images/4/4.jpeg';
import image5 from '../../public/images/4/5.jpeg';
import image6 from '../../public/images/4/6.jpeg';
import image7 from '../../public/images/4/7.jpeg';
import image8 from '../../public/images/4/8.jpeg';
import image9 from '../../public/images/4/9.jpeg';

//import image2 from '../public/images/4/image2.jpg';
//import image3 from '../public/images/4/image3.jpg';
// import the rest of your images...

export default function Home() {
  const images = [image1, image2, image3, image4,/*, the rest of your images... */
  image5, image6, image7, image8, image9,/*, the rest of your images... */];
  return (
    <div className={styles.main}>
      {images.map((url, index) => (
         <Link href={`/image/4/${index+1}`} key={index}>
         
        <Image 
          key={index} 
          src={url} 
          alt="description" 
          width={500} // replace with your desired width
          height={300} // replace with your desired height
          className={styles.image}
        />
        
        </Link>
      ))}
    </div>
  );
}