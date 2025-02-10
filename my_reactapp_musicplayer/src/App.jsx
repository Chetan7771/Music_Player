import React, { useState, useEffect } from "react";
import "./index.css";

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Update body class whenever the theme changes
  useEffect(() => {
    document.body.className = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);

  // Toggle theme handler
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div>
      <nav className="navbar">
        <h1 className="brand-name">GrooveBox</h1>
        <ul className="navbar-links">
          <li>Home</li>
          <li>Explore</li>
          <li>Playlists</li>
          <li>Profile</li>
        </ul>
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {isDarkMode ? "Light" : "Dark"}
        </button>
      </nav>
    </div>
  );
}

export default Navbar;