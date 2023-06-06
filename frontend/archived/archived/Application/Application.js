import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

//hooks
import useApplicationManager from '../../hooks/useApplicationManager';
import useLocationManager from '../../hooks/useLocationManager';

//sections
import StatusInfoSection from './sections/StatusInfo/StatusInfoSection.js';
import ApplicationInfoSection from './sections/ApplicationInfo/ApplicationInfoSection.js'
import TasksInfoSection from './sections/TasksInfo/TasksInfoSection';
import AdditonalInfoSection from './sections/AdditonalInfo/AdditonalInfoSection';

//utils
import { checkIfNeedTask } from '../../utils/application';

export default function ApplicationInfos() {

    const { id } = useParams(); //get the id from the url
    useLocationManager() //locates the user to a specific section #section
    const { application, updateApplication } = useApplicationManager(parseInt(id));

    useEffect(() => {
        document.title = "Application " + id + " - Job Tracker App"
        return () => document.title = "Job Tracker App"
    }, [id])

    return (
        <>
            {application ?
                <div
                    className="d-flex flex-column gap-5 w-100 my-3 my-xl-0"
                    style={{ padding: "1.25vw 2.5vw" }}
                    id={"application" + application.id}
                >
                    <StatusInfoSection
                        application={application}
                        updateApplication={updateApplication}
                    />
                    <ApplicationInfoSection
                        application={application}
                    />
                    {checkIfNeedTask(application.status) ?
                        <TasksInfoSection
                            application={application}
                            updateApplication={updateApplication}
                        />
                        :
                        <></>
                    }
                    <AdditonalInfoSection
                        application={application}
                        updateApplication={updateApplication}
                    />
                </div>
                :
                <></>
            }
        </>
    )
}