import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

//sub-sections
import { StatusDates, ApplicationInfos, ApplicationNotes, ApplicationTasks } from "./sections";

//layouts
import { SectionLayout } from "../../layouts/SectionLayout";

//hooks
import useLocationManager from "../../hooks/useLocationManager";
import useApplicationManager from "../../hooks/useApplicationManager";

export default function ApplicationDetails() {

    const { id } = useParams(); //get the id from the url
    useLocationManager() //locates the user to a specific section #section
    const { application, updateApplication, isLoading } = useApplicationManager(parseInt(id));

    useEffect(() => {
        if (application) {
            document.title = "" + application.position + ", " + application.company + " -  Job Tracker App"
        }
        return () => document.title = "Job Tracker App"
    }, [id, application])

    console.log(id, application)

    if (isLoading) {
        return <>Loading...</>
    }

    if (!application) {
        return <>Application Not Found!</>
    }

    return (
        //define the final font size here
        <div className="d-flex flex-column gap-5 fs-5">

            <Link
                to={"/application/edit/" + application.application_id}
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

            <SectionLayout title={"Status And Dates :"}>
                <StatusDates
                    application={application}
                    updateApplication={updateApplication}
                />
            </SectionLayout>

            <SectionLayout title={"Application Infos :"}>
                <ApplicationInfos
                    application={application}
                />
            </SectionLayout>

            <SectionLayout title={"Application Tasks :"}>
                <ApplicationTasks
                    application={application}
                />
            </SectionLayout>
            
            <SectionLayout title={"Application Notes :"}>
                <ApplicationNotes
                    application={application}
                />
            </SectionLayout>

        </div>
    )
}