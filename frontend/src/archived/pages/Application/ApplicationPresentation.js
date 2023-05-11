//helpers
import ApplicationBasicInfo from './Layout/ApplicationBasicInfo.js'
import ApplicationAppInfo from './Layout/ApplicationAppInfo.js'
import ApplicationLinksInfo from './Layout/ApplicationLinksInfo.js'
import ApplicationDescription from './Layout/ApplicationDescription.js'
import ApplicationTask from './Layout/ApplicationTasks.js'
import ApplicationAppointment from './Layout/ApplicationAppointment.js'


export default function ApplicationPresentation({ application, updateNewStatus, tasks, submitAppointment }) {

    const basicInfo = {
        status: application.status,
        dateEdited: application.dateEdited,
        dateCreated: application.dateCreated,
        dateApplied: application.dateApplied,
    }

    const appInfo = {
        position: application.position,
        company: application.company,
        salary: application.salary,
    }

    const linksInfo = {
        interviewPrep: application.interviewPrep,
        resume: application.resume,
        coverLetter: application.coverLetter,
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
                <div className="d-flex flex-column gap-3 gap-md-4 gap-xl-5">
                    <div className="d-flex flex-column flex-xl-row align-items-stretch gap-3 gap-md-4 gap-xl-5">
                        <ApplicationAppInfo
                            displayData={appInfo}
                        />
                        <ApplicationLinksInfo
                            displayData={linksInfo}
                            status={application.status}
                        />
                    </div>
                    <ApplicationDescription
                        description={description}
                    />
                </div>
            </div>

            {application.status === "interviewing" || application.status === "accepted" ?
                <div className="d-flex flex-column gap-3" id="appointments">
                    <div className="d-flex flex-column gap-0">
                        <div className='h2 text-nowrap'>
                            Application Tasks :
                        </div>
                        <hr className='w-100' />
                    </div>
                    <ApplicationTask
                        tasks={tasks}
                        status={application.status}
                    />
                </div>
                :
                <></>
            }

            <div className="d-flex flex-column gap-3">
                <div className="d-flex flex-column gap-0">
                    <div className='h2 text-nowrap'>
                        Additional Info :
                    </div>
                    <hr className='w-100' />
                </div>
                <ApplicationAppointment
                    submitAppointment={submitAppointment}
                    status={application.status}
                />
            </div>
            {/* //add notes */}

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