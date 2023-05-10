//helpers
import ApplicationBasicInfo from './Layout/ApplicationBasicInfo.js'
import ApplicationAppInfo from './Layout/ApplicationAppInfo.js'
import ApplicationLinksInfo from './Layout/ApplicationLinksInfo.js'
import ApplicationDescription from './Layout/ApplicationDescription.js'
import ApplicationTask from './Layout/ApplicationTasks.js'
import ApplicationAppointment from './Layout/ApplicationAppointment.js'


export default function ApplicationPresentation({ application, updateNewStatus, tasks }) {

    const basicInfo = {
        status: application.status,
        dateEdited: application.dateEdited,
        dateCreated: application.dateCreated,
        dateApplied: "2-28-2023 3:00",
    }

    const appInfo = {
        position: application.position,
        company: application.company,
        description: application.description,
        salary: application.salary,
    }

    const linksInfo = {
        interviewPrep: application.interviewPrep,
        resume: "/google-doc/resume",
        coverLetter: "/google-doc/cover",
    }

    //test data
    const description = application.description

    // console.log(application.id)
    return (
        <div
            className="d-flex flex-column gap-5 w-100 my-3 my-xl-0"
            style={{ padding: "1.25vw 2.5vw" }}
            id={"application" + application.id}
        >
            <div className="d-flex flex-column gap-lg-3">
                <div className="d-flex flex-column gap-0">
                    <div className='h2 text-nowrap'>
                        Status Info :
                    </div>
                    <hr className='w-100' />
                </div>
                <ApplicationBasicInfo
                    displayData={basicInfo}
                    updateNewStatus={updateNewStatus}
                    status={application.status}
                />
            </div>

            <div className="d-flex flex-column gap-lg-3" id="interview-prep">
                <div className="d-flex flex-column gap-0">
                    <div className='h2 text-nowrap'>
                        Application Info :
                    </div>
                    <hr className='w-100' />
                </div>
                <div className="d-flex flex-column flex-xl-row align-items-stretch gap-3 gap-md-4 gap-xl-5">
                    <ApplicationAppInfo
                        displayData={appInfo}
                    />
                    <ApplicationLinksInfo
                        displayData={linksInfo}
                        status={application.status}
                    />
                </div>
            </div>

            <ApplicationDescription
                description={description}
                id={application.id}
            />

            <div className="d-flex flex-column gap-3">
                <div className="d-flex flex-column gap-0">
                    <div className='h2 text-nowrap'>
                        Additional Info :
                    </div>
                    <hr className='w-100' />
                </div>
                <ApplicationAppointment/>
                <ApplicationTask
                    tasks={tasks}
                    status={application.status}
                />
            </div>
            {/* <hr className='w-100' /> */}

            {/* <div className="d-flex flex-column gap-1">
                <div className="h2">
                    {application.position}
                </div>
                <hr className='' />
            </div> */}
        </div>
    )
}