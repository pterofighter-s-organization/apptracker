import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//pages
import { Dashboard } from './pages/Dashboard';
import { JobBoard } from './pages/JobBoard';
import { TaskBoard } from './pages/TaskBoard';
import { NoteBoard } from './pages/NoteBoard';
import { JobPage } from './pages/JobPage';

//css
import './App.css'
import { JobNewForm } from './pages/JobForms/JobNewForm';
import { JobEditForm } from './pages/JobForms/JobEditForm';
import { JobProvider } from './contexts/JobContext';

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
          <Route path="/all-jobs/:status" element={<JobBoard />} />
          <Route path="/all-tasks/:status" element={<TaskBoard />} />
          <Route path="/all-notes/:status" element={<NoteBoard />} />
        </Routes>
        <JobProvider>
          <Routes>
            <Route path="/job/:id" element={<JobPage />} />
            <Route path="/job-edit/:id" element={<JobEditForm />} />
            <Route path="/new-job" element={<JobNewForm />} />
          </Routes>
        </JobProvider>
      </Router>
    </div>
  );
}


