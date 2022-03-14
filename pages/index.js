import Image from 'next/image';
import Header from '../components/home/Header';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className="w-4/5 m-0-auto">
        <Image
          src="https://picsum.photos/1200/350.webp"
          // layout="responsive"
          width="1200px"
          height="350px"
          alt="Random image"
        />
      </div>
    </div>
  );
};

export default Home;
