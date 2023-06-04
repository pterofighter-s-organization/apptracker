import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//pages
import { Dashboard } from './pages/Boards/Dashboard';
import { ArchivedBoard } from './pages/Boards/ArchivedBoard';
import { PinnedApplications } from './pages/PinnedApplications';
import { ApplicationDetails } from './pages/ApplicationDetails'
import { EditApplicationForm } from './pages/ApplicationForms/EditApplicationForm';
import { NewApplicationForm } from './pages/ApplicationForms/NewApplicationForm';

//layouts
import { PageLayout } from './layouts/PageLayout';

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
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/archived-board" element={<ArchivedBoard />} />
              <Route exact path="/pinned-applications" element={<PinnedApplications />} />
              <Route exact path="/application/:id" element={<ApplicationDetails />} />
              <Route exact path="/application/edit/:id" element={<EditApplicationForm />} />
              <Route exact path="/application/new/:givenStatus" element={<NewApplicationForm />} />
            </Routes>
          </PageLayout>
        </div>
      </Router>
    </div>
  );
}


