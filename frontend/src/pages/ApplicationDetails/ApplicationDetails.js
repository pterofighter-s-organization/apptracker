import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

//hooks
import useApplicationManager from "../../hooks/useApplicationManager";
import useLocationManager from "../../hooks/useLocationManager";

//utils
import { checkIfNeedTask } from "../../utils/application";

//sections
import StatusAndDates from "./sections/StatusAndDates/StatusAndDates";
import ApplicationInfos from "./sections/ApplicationInfos/ApplicationInfos";
import AdditionalInfos from "./sections/AdditonalInfos/AdditionalInfos";
import TaskInfos from "./sections/TaskInfos/TaskInfos";

export default function ApplicationDetails() {

    const { id } = useParams(); //get the id from the url
    useLocationManager() //locates the user to a specific section #section
    const { application, updateApplication } = useApplicationManager(parseInt(id));

    useEffect(() => {
        if (application) {
            document.title = "" + application.position + ", " + application.company + " -  Job Tracker App"
        }
        return () => document.title = "Job Tracker App"
    }, [id, application])

    if (!application) {
        return <></>
    }

    return (
        <div
            className="d-flex flex-column gap-5 w-100 my-3 my-xl-0"
            style={{ padding: "1.25vw 2.5vw" }}
            id={"application" + application.id}
        >
            <Link
                to={"/application/edit/" + application.id}
                className="btn btn-primary p-3 py-4 fs-6"
                id="edit"
            >
                <div className="d-flex flex-row gap-3 justify-content-center">
                    <i class="bi bi-pencil"></i>
                    <div>
                        Edit Application
                    </div>
                </div>
            </Link>

            <StatusAndDates
                application={application}
                updateApplication={updateApplication}
                fontSize={"fs-5"}
            />
            <ApplicationInfos
                application={application}
                fontSize={"fs-5"}
            />
            {checkIfNeedTask(application.status) ?
                <TaskInfos
                    application={application}
                    updateApplication={updateApplication}
                    fontSize={"fs-6"}
                />
                :
                <></>
            }
            <AdditionalInfos
                application={application}
                updateApplication={updateApplication}
                fontSize={"fs-6"}
            />
        </div>
    )
}