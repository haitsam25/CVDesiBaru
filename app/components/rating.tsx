'use client'; // Menandai komponen ini sebagai Client Component

import React, { useState, useEffect } from 'react';

function Rating() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState<number>(0);
  const [allRatings, setAllRatings] = useState<number[]>([]);
  const [feedbacks, setFeedbacks] = useState<{ name: string; comment: string; rating: number }[]>([]);

  useEffect(() => {
    const savedRatings = JSON.parse(localStorage.getItem('allRatings') || '[]');
    const savedFeedbacks = JSON.parse(localStorage.getItem('feedbacks') || '[]');
    setAllRatings(savedRatings);
    setFeedbacks(savedFeedbacks);
  }, []);

  const averageRating = allRatings.length ? (allRatings.reduce((a, b) => a + b, 0) / allRatings.length).toFixed(1) : '0';
  const ratingPercentage = allRatings.length ? ((Number(averageRating) / 5) * 100).toFixed(1) : '0';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && comment && rating) {
      const newRatings = [...allRatings, rating];
      const newFeedbacks = [...feedbacks, { name, comment, rating }];
      setAllRatings(newRatings);
      setFeedbacks(newFeedbacks);
      localStorage.setItem('allRatings', JSON.stringify(newRatings));
      localStorage.setItem('feedbacks', JSON.stringify(newFeedbacks));
      alert("Komentar dan rating berhasil dikirim!");
      setName('');
      setComment('');
      setRating(0);
    } else {
      alert("Mohon isi semua kolom dan pilih rating.");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", color: "white" }}>
      <h2 style={{ color: "#FFA500", textShadow: "0 0 5px #FFA500, 0 0 10px #FFA500" }}>Formulir Komentar</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1em" }}>
          <label htmlFor="name" style={{ color: "white", fontWeight: "bold" }}>Nama:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", color: "white", backgroundColor: "black", border: "1px solid #FFA500" }}
          />
        </div>

        <div style={{ marginBottom: "1em" }}>
          <label htmlFor="comment" style={{ color: "white", fontWeight: "bold" }}>Komentar:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            rows={4}
            style={{ width: "100%", padding: "8px", color: "white", backgroundColor: "black", border: "1px solid #FFA500" }}
          />
        </div>

        <div style={{ marginBottom: "1em" }}>
          <label style={{ color: "white", fontWeight: "bold" }}>Rating:</label>
          <div style={{ display: "flex", gap: "5px", marginTop: "5px" }}>
            {[1, 2, 3, 4, 5].map((heart) => (
              <span
                key={heart}
                style={{
                  fontSize: "24px",
                  cursor: "pointer",
                  color: heart <= rating ? "#FFA500" : "gray",
                  transition: "transform 0.2s, color 0.2s",
                  transform: heart === rating ? "scale(1.2)" : "scale(1)"
                }}
                onClick={() => setRating(heart)}
              >
                ❤️
              </span>
            ))}
          </div>
        </div>

        <button type="submit" style={{ padding: "10px 15px", backgroundColor: "#FFA500", color: "#fff" }}>
          Kirim Komentar
        </button>
      </form>

      <div style={{ marginTop: "2em" }}>
        <h3 style={{ color: "#FFA500" }}>
          Rata-Rata Rating: {averageRating} dari 5 hati
        </h3>
        <div style={{ width: "100%", backgroundColor: "#ddd", borderRadius: "5px", height: "20px" }}>
          <div style={{
            width: `${ratingPercentage}%`,
            backgroundColor: "orange",
            height: "100%",
            borderRadius: "5px"
          }} />
        </div>
        <div style={{ textAlign: "center", color: "white" }}>
          {ratingPercentage}% / 100%
        </div>
      </div>

      <div style={{ marginTop: "2em" }}>
        <h3 style={{ color: "#FFA500" }}>Daftar Komentar</h3>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ddd", padding: "8px", color: "white" }}>Nama</th>
              <th style={{ border: "1px solid #ddd", padding: "8px", color: "white" }}>Komentar</th>
              <th style={{ border: "1px solid #ddd", padding: "8px", color: "white" }}>Rating</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((feedback, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid #ddd", padding: "8px", color: "white" }}>{feedback.name}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px", color: "white" }}>{feedback.comment}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px", color: "white" }}>
                  {feedback.rating} / 5
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Rating;
