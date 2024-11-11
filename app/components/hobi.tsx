"use client";
import React from 'react';
import Image from 'next/image';
import hobby1 from '../hobi1.jpg';
import hobby2 from '../hobi2.jpg';
import hobby3 from '../hobi3.jpg';
import hobby4 from '../hobi4.jpg';

const HobbiesGallery: React.FC = () => {
  const hobbies = [
    { id: 1, title: 'Modell', image: hobby1 },
    { id: 2, title: 'Sing', image: hobby2 },
    { id: 3, title: 'Study', image: hobby3 },
    { id: 4, title: 'Cook', image: hobby4 },
  ];

  const styles = {
    container: {
      padding: '20px',
      textAlign: 'center',
    } as React.CSSProperties,
    title: {
      color: 'teal',
    } as React.CSSProperties,
    gallery: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap' as 'wrap',
      marginTop: '20px',
    } as React.CSSProperties,
    card: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      alignItems: 'center',
      width: '250px',
      margin: '15px',
      textAlign: 'center',
      transition: 'transform 0.3s ease', // Tambahkan animasi halus pada keseluruhan card
    } as React.CSSProperties,
    borderWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '220px',
      height: '220px',
      borderRadius: '50%',
      background: 'conic-gradient(#ff6b6b, #ff9e6b, #ffcd6b, #6bffa3, #6bb2ff, #6e6bff, #ff6bdb, #ff6b6b)',
      padding: '10px',
      transition: 'transform 0.3s ease', // Animasi saat hover
    } as React.CSSProperties,
    imageWrapper: {
      width: '200px',
      height: '200px',
      overflow: 'hidden',
      borderRadius: '50%',
      position: 'relative',
      boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
      transition: 'transform 0.3s ease', // Animasi saat hover
    } as React.CSSProperties,
    hobbyTitle: {
      marginTop: '10px',
      fontSize: '18px',
      color: '#333',
    } as React.CSSProperties,
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>My Gallery</h2>
      <div style={styles.gallery}>
        {hobbies.map((hobby) => (
          <div
            key={hobby.id}
            style={styles.card}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')} // Membesar saat hover
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <div
              style={styles.borderWrapper}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')} // Efek zoom di borderWrapper
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <div
                style={styles.imageWrapper}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')} // Efek zoom di imageWrapper
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <Image
                  src={hobby.image}
                  alt={hobby.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <h3 style={styles.hobbyTitle}>{hobby.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HobbiesGallery;
