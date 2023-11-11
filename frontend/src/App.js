import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//pages
import { Dashboard } from './pages/Dashboard';
import { JobBoard } from './pages/JobBoard';
import { TaskBoard } from './pages/TaskBoard';
import { NoteBoard } from './pages/NoteBoard';
import { JobPage } from './pages/JobPage';

//css
import './App.css'

export default function App() {

  return (
    // mimic footer with pb-5
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/all-jobs" element={<JobBoard />} />
          <Route path="/all-tasks" element={<TaskBoard />} />
          <Route path="/all-notes" element={<NoteBoard />} />
          <Route path="/all-jobs/:givenStatus" element={<JobBoard />} />
          <Route path="/all-tasks/:givenStatus" element={<TaskBoard />} />
          <Route path="/all-notes/:givenStatus" element={<NoteBoard />} />
          <Route path="/job/:id" element={<JobPage />} />
        </Routes>
      </Router>
    </div>
  );
}


