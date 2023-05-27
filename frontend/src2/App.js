import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


//components
import Navbar from "./components/Navbar/Navbar.js";

//pages
import Dashboard from "./pages/Dashboard/Dashboard.js";
import ApplicationDetails from './pages/ApplicationDetails/ApplicationDetails.js';
import ApplicationEditForm from './pages/ApplicationEditForm/ApplicationEditForm.js';
import ApplicationForm from './pages/ApplicationForm/ApplicationForm.js';

//css
import './App.css'

export default function App() {

  //reason why this is wrapped with fragment (ex: <> </>)
  //because it won't be affected by any css, any it can put <navbar> on top of <router>
  return (
    // mimic footer with pb-5
    <div className="App">
      <Router>
        <div className="d-flex flex-column flex-xl-row">
          <Navbar breakpoint={"lg"}/>
          {/* <TaskTablePresentation /> */}
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/application/:id" element={<ApplicationDetails/>} />
            <Route exact path="/application/edit/:id" element={<ApplicationEditForm/>} />
            <Route exact path="/application/new" element={<ApplicationForm/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}


