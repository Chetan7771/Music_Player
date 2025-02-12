import React from "react";
import "react-h5-audio-player/lib/styles.css";
import AudioPlayer from "react-h5-audio-player";

const songs = [
  { name: "Peelings", file: "/Peelings.mp3" },
  { name: "Hilesso Hilessa", file: "/Hilesso Hilessa.mp3" },
  { name: "The Rage of Daaku", file: "/The Rage of Daaku.mp3" },
  { name: "Jaadu Do Patti 320 Kbps", file: "/Jaadu Do Patti.mp3" },
  { name: "Tere Naina", file: "/Tere Naina.mp3" },
  { name: "Paisa Ho Toh", file: "/Paisa Ho Toh.mp3" }
];

const MusicPlayer = () => {
  return (
    <div style={{ 
      display: "grid", 
      gridTemplateColumns: "repeat(3, 1fr)", 
      gap: "40px", 
      padding: "20px",
      justifyItems: "center"
    }}>
      {songs.map((song, index) => (
        <div key={index} style={{ 
          textAlign: "center",
          background: "#ffffff", 
          padding: "20px", 
          borderRadius: "12px", 
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", 
          width: "250px",
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s",
          border: "2px solid #2ecc71" // Subtle green border
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(46, 204, 113, 0.3)"; // Green glow on hover
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        }}
        >
          <h3 style={{ 
            fontFamily: "Arial, sans-serif", 
            fontSize: "18px", 
            marginBottom: "10px", 
            color: "#2ecc71" // Green title text
          }}>
            {song.name}
          </h3>
          <AudioPlayer 
            src={song.file} 
            customAdditionalControls={[]} // Remove extra buttons
            showJumpControls={false}
            layout="stacked"
            progressBarStyle={{ backgroundColor: "#2ecc71" }} // Green progress bar
          />
        </div>
      ))}
    </div>
  );
};

export default MusicPlayer;
