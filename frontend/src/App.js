import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardContainer from "./containers/DashboardContainer/DashboardContainer.js";
import './App.css'

export default function App() {

  //reason why this is wrapped with fragment (ex: <> </>)
  //because it won't be affected by any css, any it can put <navbar> on top of <router>
  return (
    <>
      {/* <Navbar /> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<DashboardContainer/>} />
        </Routes>
      </Router>
    </>
  );
}


