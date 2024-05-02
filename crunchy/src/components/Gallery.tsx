import React, { useState, useEffect } from "react";
import { dummyData } from '../../dummyData.ts'; // Assuming correct path to dummyData file
import classes from './Gallery.module.css'

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dummyData.length);
    }, 4000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once on mount

  const handleClick = ()=>{
    setCurrentIndex(currentIndex+1);
  }

  return (
    <>
      <h1>Gallery component</h1>
      <main className={classes.container}>

        <h2>{dummyData[currentIndex].title}</h2>
        <p>{dummyData[currentIndex].description}</p>
        
        {dummyData[currentIndex].image && (
          <img
            className={classes.myImg}
            src={dummyData[currentIndex].image}
            alt={dummyData[currentIndex].title}
          />
        )}
      </main>
    </>
  );
};

export default Gallery;
