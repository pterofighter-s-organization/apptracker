import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

//sub-sections
import { StatusDates, ApplicationInfos, ApplicationNotes, ApplicationTasks } from "./sections";

//layouts
import { SectionLayout } from "../../layouts/SectionLayout";

//hooks
import useLocationManager from "../../hooks/useLocationManager";
import useApplicationManager from "../../hooks/useApplicationManager";

//helpers
import * as applicationHelpers from "../../helpers/applicationHelpers"

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

    function updateArchiveStatus() {
        const updateInfo = {
            "archived": !application.archived
        }
        updateApplication(applicationHelpers.updateApplicationInfo(updateInfo, application))
    }

    if (isLoading) {
        return <>Loading...</>
    }

    if (!application) {
        return <>Application Not Found! Mostly backend not connected.</>
    }

    return (
        //define the final font size here
        <div className="d-flex flex-column gap-5 fs-5">

            <div className="d-flex flex-column gap-3">
                <button 
                    className={`btn ${(!application.archived ? "btn-danger" : "btn-secondary")} p-3 py-4 ${"form-button"}`}
                    onClick={(e) => {
                        e.preventDefault()
                        updateArchiveStatus()                       
                    }}    
                >
                    <div className={`d-flex flex-row gap-3 justify-content-center ${"form-button-label"}`}>
                        {!application.archived ?
                            <>
                                <i class="bi bi-x-lg"></i>
                                <div>
                                    Archive Application
                                </div>
                            </>
                            :
                            <>
                                <i class="bi bi-arrow-clockwise"></i>
                                <div>
                                    Restore Application
                                </div>
                            </>
                        }
                    </div>
                </button>

                <Link
                    to={"/application/edit/" + application.application_id}
                    className={`btn btn-primary p-3 py-4 ${"form-button"}`}
                    id="edit"
                >
                    <div className={`d-flex flex-row gap-3 justify-content-center ${"form-button-label"}`}>
                        <i class="bi bi-pencil"></i>
                        <div>
                            Edit Application
                        </div>
                    </div>
                </Link>
            </div>

            <SectionLayout title={"Status And Dates"}>
                <StatusDates
                    application={application}
                    updateApplication={updateApplication}
                />
            </SectionLayout>

            <SectionLayout title={"Application Infos"}>
                <ApplicationInfos
                    application={application}
                />
            </SectionLayout>

            <SectionLayout title={"Application Reminders"}>
                <ApplicationTasks
                    application={application}
                    isArchived={false}
                />
            </SectionLayout>

            <SectionLayout title={"Application Notes"}>
                <ApplicationNotes
                    application={application}
                    isArchived={false}
                />
            </SectionLayout>

        </div>
    )
}