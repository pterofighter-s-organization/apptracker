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

//routes
import IsAuthRoutes from './routes/IsAuthRoutes';

//providers
import { JobProvider } from './hooks/contexts/JobContext';
import { JobsProvider } from './hooks/contexts/JobsContext';
import { TasksProvider } from './hooks/contexts/TasksContext';
import { NotesProvider } from './hooks/contexts/NotesContext';
import { AuthProvider } from './hooks/contexts/AuthContext';

//css
import './App.css'

export default function App() {

  /*
    to fix the "no routes matched sth error" we must
    have routes nest under /, but can fix later.
  */
  return (
    <div className="App">
      <NotificationList />
      <Router>
        <AuthProvider>
          <Routes>
            <Route element={<IsAuthRoutes isAuth={false} />}>
              <Route path="/login" element={<LoginForm />} />
              <Route path="/signup" element={<SignupForm />} />
            </Route>
          </Routes>
          <Routes>
            <Route element={<IsAuthRoutes isAuth={true} />}>
              <Route exact path="/" element={<Dashboard />} />
            </Route>
          </Routes>
          <NotesProvider>
            <Routes>
              <Route element={<IsAuthRoutes isAuth={true} />}>
                <Route path="/all-notes" element={<NoteBoard />} />
                <Route path="/all-notes/:status" element={<NoteBoard />} />
              </Route>
            </Routes>
          </NotesProvider>
          <TasksProvider>
            <Routes>
              <Route element={<IsAuthRoutes isAuth={true} />}>
                <Route path="/all-tasks" element={<TaskBoard />} />
                <Route path="/all-tasks/:status" element={<TaskBoard />} />
              </Route>
            </Routes>
          </TasksProvider>
          <JobsProvider>
            <Routes>
              <Route element={<IsAuthRoutes isAuth={true} />}>
                <Route path="/all-jobs/:status" element={<JobBoard />} />
                <Route path="/all-jobs" element={<JobBoard />} />
              </Route>
            </Routes>
          </JobsProvider>
          <JobProvider>
            <Routes>
              <Route element={<IsAuthRoutes isAuth={true} />}>
                <Route path="/job/:id" element={<JobPage />} />
                <Route path="/job-edit/:id" element={<JobEditForm />} />
                <Route path="/new-job" element={<JobNewForm />} />
              </Route>
            </Routes>
          </JobProvider>
        </AuthProvider>
      </Router>
    </div>
  );
}


