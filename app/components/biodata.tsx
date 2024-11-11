"use client";
import React from 'react';

const PersonalInfo = () => {
  const personalData = {
    name: 'Desi Rahmawati',
    birthDate: '20 Desember 2002',
    email: 'desirahmawati580@gmail.com',
    phone: '083108186965',
    address: 'Kp.Sukamanah Rt.09 Rw.09, Rancaekek, Jawa Barat',
    occupation: 'Administrator',
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Informasi Pribadi</h2>
      <hr style={styles.line} /> {/* Garis horizontal di bawah judul */}
      <ul style={styles.list}>
        {Object.entries(personalData).map(([key, value]) => (
          <li key={key} style={styles.listItem}>
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
            <hr style={styles.line} /> {/* Garis horizontal di bawah setiap item */}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    border: '1px solid rgba(255, 255, 255, 0.3)', // Border transparan
    borderRadius: '5px',
    padding: '20px',
    maxWidth: '400px',
    margin: '20px auto',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Background semi-transparan
    fontFamily: 'Roboto, sans-serif',
    color: 'white', // Teks berwarna putih
  },
  title: {
    color: 'white',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '700',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    marginBottom: '10px',
    color: 'white',
    fontWeight: '500',
  },
  line: {
    width: '100%',
    height: '1px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Warna garis tipis dan transparan
    border: 'none',
    margin: '5px 0',
  },
};

export default PersonalInfo;
