import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Login";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Settings from "./Components/Settings";
import MusicPlayer from "./Components/MusicPlayer";

// Home Component with MusicPlayer
const Home = () => (
  <div>
    <h2></h2>
    <MusicPlayer /> {/* Using MusicPlayer instead of AudioPlayer */}
  </div>
);

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      {isLoggedIn && <Navbar />}
      <div>
        <Routes>
          {!isLoggedIn ? (
            <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
