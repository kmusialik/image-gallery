import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from './image.module.css';
import NavBar from '../../../app/components/ui/navBar/NavBar';
import { ClerkProvider } from '@clerk/nextjs';
import { GetServerSidePropsContext } from 'next';

export default function ImagePage({ image }: { image: any }) { /// receive image as a prop here
  const router = useRouter();

  if (!image) return null;

  return (
    <>
      <ClerkProvider>
        <NavBar />
        <button 
          onClick={() => router.back()} 
          style={{ display: 'block', margin: '10px', padding: '10px', backgroundColor: 'lightblue' }}
        >
          Back
        </button>
        <div className={styles.main}>
          <div className={styles.imageContainer}>
            <Image 
              src={`/images/4/${image.id}.jpeg`} 
              alt="description" 
              layout="fill" // This will make the image fill its container
              objectFit="contain" // This will scale the image down to fit its container, preserving its aspect ratio
              className={styles.image}
            />
          </div>
          <p>{image.description}</p>
        </div>
      </ClerkProvider>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { params } = context;
    const { id } = params;
  
    try {
      const response = await fetch(`http://localhost:3012/api/images/${id}`, {
        headers:{
          accept: 'application/json'
        }
      });
      

 

      if (!response.ok) {
        throw new Error('Failed to fetch image data');
      }
      const image = await response.json();

      console.log(image);
      return {
        props: {
          image,
        },
      };
    } catch (error) {
      console.error(error);
      return {
        props: {
          image: null,
        },
      };
    }
  }