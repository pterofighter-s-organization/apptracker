import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//pages
import Dashboard from "./pages/Dashboard/Dashboard.js";

//css
import './App.css'

export default function App() {

  //reason why this is wrapped with fragment (ex: <> </>)
  //because it won't be affected by any css, any it can put <navbar> on top of <router>
  return (
    // mimic footer with pb-5
    <div className="pb-5">
      <Router>
        {/* <Navbar /> */}
        {/* <TaskTablePresentation /> */}
        <Routes>
          <Route exact path="/" element={<Dashboard/>} />
        </Routes>
      </Router>
    </div>
  );
}


