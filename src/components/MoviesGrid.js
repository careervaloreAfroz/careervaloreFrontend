"use client";

import Link from "next/link";

const MoviesGrid = ({ movies, handlePin, handleDelete }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap", // Ensures the items wrap to the next row
        gap: "20px", // Adds space between items
        justifyContent: "center", // Centers the items horizontally
      }}
    >
      {movies.map((movie, index) => (
        <div
          key={index}
          style={{
            display: "flex", // Ensures movie item is a flex container
            flexDirection: "column", // Makes sure the items inside align vertically
            alignItems: "center", // Centers content horizontally inside each item
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "15px",
            backgroundColor: "#f9f9f9",
            width: "300px", // Adjust width for responsiveness
            boxSizing: "border-box", // Prevents content overflow
          }}
        >
          {movie.pin && <p style={{ color: "green" }}>Pinned</p>}

          <img
            src={movie.image}
            alt={movie.name}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "5px",
              marginBottom: "10px",
            }}
          />
          <h3 style={{ marginBottom: "10px", color: "#333" }}>{movie.name}</h3>
          <p style={{ color: "#666", textAlign: "center" }}>{movie.description}</p>
          <div style={{ display: "flex", flexDirection: "row", gap: "5px", justifyContent: "center" }}>
            <Link href={`/${movie._id}`}>
              <button
                style={{
                  padding: "5px 10px",
                  backgroundColor: "green",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                View More
              </button>
            </Link>
            {!movie.pin ? (
              <button
                onClick={() => handlePin(movie._id, movie.pin)}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#007BFF",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Pin
              </button>
            ) : (
              <button
                onClick={() => handlePin(movie._id, movie.pin)}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#FF6347", // Use a distinct color for "Unpin"
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Unpin
              </button>
            )}

            <button
              onClick={() => handleDelete(movie._id)}
              style={{
                padding: "5px 10px",
                backgroundColor: "#FF4D4D",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoviesGrid;
