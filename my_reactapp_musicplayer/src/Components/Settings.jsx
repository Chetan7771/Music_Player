import React, { useState } from "react";
import "../index.css"; // Ensure styles are applied

const Settings = ({ isOpen, toggleSettings, toggleTheme, isDarkMode }) => {
  if (!isOpen) return null; // Hide when not open

  return (
    <div className="settings-panel">
      <h3>Settings</h3>
      <button onClick={toggleTheme} className="theme-toggle">
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Settings;
