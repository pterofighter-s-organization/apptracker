import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//pages
import { Dashboard } from './pages/Dashboard';

//css
import './App.css'

export default function App() {

  return (
    // mimic footer with pb-5
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard/>} />
        </Routes>
      </Router>
    </div>
  );
}


