import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Views/DashboardView.js';
import './App.css'

export default function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
    </Router>
  );
}


