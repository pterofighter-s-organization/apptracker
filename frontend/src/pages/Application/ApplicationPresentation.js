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
    const description = `We are seeking a Junior Marketing Associate to join our fast-paced marketing team. The ideal candidate will have excellent communication skills, strong attention to detail, and a passion for marketing. In this role, you will assist in developing and executing marketing campaigns across various channels, including social media, email, and digital advertising. You will work closely with the marketing team to research target markets, create marketing materials, and analyze campaign results. This is a great opportunity for someone who is looking to build their marketing skills and grow in their career.

    Responsibilities:
    
    Assist in developing and executing marketing campaigns across various channels, including social media, email, and digital advertising
    Research target markets and customer segments to inform campaign strategy
    Create marketing materials such as social media posts, email newsletters, and digital ads
    Monitor and report on campaign performance using analytics tools
    Collaborate with the marketing team to brainstorm new ideas and strategies
    Stay up-to-date with industry trends and best practices
    Requirements:
    
    Bachelor's degree in marketing or a related field
    Strong written and verbal communication skills
    Excellent attention to detail
    Strong analytical skills
    Proficiency with Microsoft Office and Google Suite
    Familiarity with marketing analytics tools such as Google Analytics
    Ability to work in a fast-paced, deadline-driven environment
    Positive attitude and willingness to learn`

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