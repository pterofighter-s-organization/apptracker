import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//components
import { NotificationList } from './components/NotificationList';

//pages
import { Dashboard } from './pages/Dashboard';
import { JobBoard } from './pages/JobBoard';
import { TaskBoard } from './pages/TaskBoard';
import { NoteBoard } from './pages/NoteBoard';
import { JobPage } from './pages/JobPage';
import { JobNewForm } from './pages/JobForms/JobNewForm';
import { JobEditForm } from './pages/JobForms/JobEditForm';
import { LoginForm } from './pages/AuthForms/LoginForm';
import { SignupForm } from './pages/AuthForms/SignupForm';

//css
import './App.css'

//context-providers
import { JobProvider } from './hooks/contexts/JobContext';
import { JobsProvider } from './hooks/contexts/JobsContext';
import { TasksProvider } from './hooks/contexts/TasksContext';
import { NotesProvider } from './hooks/contexts/NotesContext';

export default function App() {

  return (
    // mimic footer with pb-5
    <div className="App">
      <NotificationList />
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
        <NotesProvider>
          <Routes>
            <Route path="/all-notes" element={<NoteBoard />} />
            <Route path="/all-notes/:status" element={<NoteBoard />} />
          </Routes>
        </NotesProvider>
        <TasksProvider>
          <Routes>
            <Route path="/all-tasks" element={<TaskBoard />} />
            <Route path="/all-tasks/:status" element={<TaskBoard />} />
          </Routes>
        </TasksProvider>
        <JobsProvider>
          <Routes>
            <Route path="/all-jobs/:status" element={<JobBoard />} />
            <Route path="/all-jobs" element={<JobBoard />} />
          </Routes>
        </JobsProvider>
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


