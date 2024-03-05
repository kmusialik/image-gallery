import { auth, currentUser } from '@clerk/nextjs';
import Image from 'next/image';
import image1 from '../../../public/images/4/1.jpeg';
import image2 from '../../../public/images/4/2.jpeg';
import image3 from '../../../public/images/4/3.jpeg';
import image4 from '../../../public/images/4/4.jpeg';
import styles from './dashboard.module.css';

const DashBoardPage = async () => {
  const user = await currentUser();
  const images = [image1, image2, image3, image4 /*, the rest of your images... */];
  return (
   
      <div className="main">
        <div className={styles.user}>Hello,  {user?.lastName} {user?.firstName}  !</div>
        <div className={styles.main}>
          {images.map((url, index) => (
            <Image 
              key={index} 
              src={url} 
              alt="description" 
              width={500} // replace with your desired width
              height={300} // replace with your desired height
              className={styles.image}
            />
          ))}
        </div>
      </div>

  );
};

export default DashBoardPage;
