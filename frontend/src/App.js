import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom'

//components
import { NotificationList } from './components/NotificationList';
import { ErrorDisplay } from './components/Displays/ErrorDisplay';

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
    fixed "no routes matched" with nesting routes under their specific provider with children being outlet.
    outlet will direct the user onto the paths under that provider route where it would render the desired path.
  */
  return (
    <div className="App">
      <NotificationList />
      <Router basename={`${process.env.PUBLIC_URL}`}>
        <AuthProvider>
          <Routes>
            <Route path="" element={<IsAuthRoutes isAuth={false} />}
            >
              <Route index element={<LoginForm />} />
              <Route path="login" element={<LoginForm />} />
              <Route path="signup" element={<SignupForm />} />
            </Route>
            <Route path="auth" element={<IsAuthRoutes isAuth={true} />}>
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />

              <Route
                path="job"
                element={
                  <JobProvider>
                    <Outlet />
                  </JobProvider>
                }
              >
                <Route index element={<JobNewForm />} />
                <Route path=":id" element={<JobPage />} />
                <Route path="edit/:id" element={<JobEditForm />} />
              </Route>

              <Route
                path="jobs"
                element={
                  <JobsProvider>
                    <Outlet />
                  </JobsProvider>
                }
              >
                <Route index element={<JobBoard />} />
                <Route path=":status" element={<JobBoard />} />
              </Route>

              <Route
                path="notes"
                element={
                  <NotesProvider>
                    <Outlet />
                  </NotesProvider>
                }
              >
                <Route index element={<NoteBoard />} />
                <Route path=":status" element={<NoteBoard />} />
              </Route>

              <Route
                path="tasks"
                element={
                  <TasksProvider>
                    <Outlet />
                  </TasksProvider>
                }
              >
                <Route index element={<TaskBoard />} />
                <Route path=":status" element={<TaskBoard />} />
              </Route>
            </Route>

            <Route path="*" element={<ErrorDisplay message={"Page not found"} />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}


