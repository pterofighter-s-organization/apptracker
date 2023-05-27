import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//pages
import { Dashboard } from './pages';
// import ApplicationDetails from './pages/ApplicationDetails/ApplicationDetails.js';
// import ApplicationEditForm from './pages/ApplicationEditForm/ApplicationEditForm.js';
// import ApplicationForm from './pages/ApplicationForm/ApplicationForm.js';

//layouts
import { PageLayout } from './layouts';

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
          <PageLayout>
            {/* <TaskTablePresentation /> */}
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              {/* <Route exact path="/application/:id" element={<ApplicationDetails />} />
              <Route exact path="/application/edit/:id" element={<ApplicationEditForm />} />
              <Route exact path="/application/new" element={<ApplicationForm />} /> */}
            </Routes>
          </PageLayout>
        </div>
      </Router>
    </div>
  );
}


