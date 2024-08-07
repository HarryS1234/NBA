import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import LookupPage from "./components/LookupPage";
import ComparisonPage from "./components/ComparisonPage";
import DuelPage from "./components/DuelPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lookup" element={<LookupPage />} />
          <Route path="/comparison" element={<ComparisonPage />} />
          <Route path="/duel" element={<DuelPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
