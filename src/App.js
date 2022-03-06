import React, { useState, useReducer } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import Header from "./components/Header";
import CoinDetailPage from "./Pages/CoinDetailPage";
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} ></Route>
          <Route path="/coin/id" element={<CoinDetailPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
