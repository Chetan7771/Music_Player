app.jsx 

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Login";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Settings from "./Components/Settings";


// Placeholder Components
const Home = () => <h2>Coming soon</h2>;

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
              <Route path="/settings" element={<Settings />} /> {/* Add Settings Page */}
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;p;
