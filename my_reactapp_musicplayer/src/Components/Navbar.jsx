import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import Settings from "./Settings";

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Apply theme changes
  useEffect(() => {
    document.body.className = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);

  // Toggle dark/light theme
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    setIsSettingsOpen(false); // Close settings after toggling theme
  };

  // Toggle settings panel
  const toggleSettings = () => {
    setIsSettingsOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <h1 className="brand-name">GrooveBox</h1>

      <ul className="navbar-links">
        <li>Home</li>
        <li>Explore</li>
        <li>Playlists</li>
        <li>Profile</li>
      </ul>

      {/* Search Bar placed between Profile and Settings Icon */}
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <button onClick={toggleSettings} className="settings-icon">
        ⚙️
      </button>

      {/* Settings Panel */}
      <Settings
        isOpen={isSettingsOpen}
        toggleSettings={toggleSettings}
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
      />
    </nav>
  );
}

export default Navbar;
