import React, { useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DashboardContainer from './components/Dashboard/DashboardContainer.js'
import TaskTablePresentation from "./components/TaskTable/TaskTablePresentation.js"
import './App.css'

export default function App() {

  //reason why this is wrapped with fragment (ex: <> </>)
  //because it won't be affected by any css, any it can put <navbar> on top of <router>
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        {/* <TaskTablePresentation /> */}
        <Routes>
          <Route exact path="/" element={<DashboardContainer/>} />
          <Route path="/p" element={<DashboardContainer/>} />
          <Route path="/u/:id" element={<TaskTablePresentation />} />
        </Routes>
      </Router>
    </>
  );
}


