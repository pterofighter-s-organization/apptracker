//helpers
import ApplicationBasicInfo from './Layout/ApplicationBasicInfo.js'
import ApplicationAppInfo from './Layout/ApplicationAppInfo.js'
import ApplicationLinksInfo from './Layout/ApplicationLinksInfo.js'
import ApplicationDescription from './Layout/ApplicationDescription.js'


export default function ApplicationPresentation({ application, updateNewStatus }) {

    const basicInfo = {
        status: application.status,
        dateEdited: application.dateEdited,
        dateCreated: application.dateCreated,
    }

    const appInfo = {
        position: application.position,
        company: application.company,
        description: application.description,
        salary: application.salary,
    }

    const linksInfo = {
        dateApplied: "2-28-2023 3:00",
        resume: "/google-doc/resume",
        coverLetter: "/google-doc/cover",
    }

    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacus ante, facilisis sit amet luctus tempor, ultrices in ipsum. Curabitur volutpat interdum arcu at aliquam. Etiam maximus purus ac leo faucibus, vel bibendum dolor tempor. Donec gravida imperdiet dignissim. Fusce ut quam sem. Donec vehicula, magna at condimentum interdum, odio felis iaculis orci, eget congue tellus leo sed tortor. Maecenas fringilla pellentesque massa, id laoreet nunc vehicula vitae. Aenean metus lorem, blandit at urna at, rutrum consectetur tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac dui nisi. Proin a scelerisque nisi, quis ultricies ipsum. Donec at euismod leo. In eget consequat purus, sit amet luctus purus. Mauris pellentesque vitae purus at fermentum."

    // console.log(application.id)
    return (
        <div
            className="d-flex flex-column gap-4 gap-xl-5 w-100 my-3 my-xl-0"
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
                />
            </div>

            <div className="d-flex flex-column gap-lg-3">
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
                    />
                </div>
            </div>

            <ApplicationDescription 
                description={description} 
                id={application.id}
            />

            <div className="d-flex flex-column gap-lg-3">
                <div className="d-flex flex-column gap-0">
                    <div className='h2 text-nowrap'>
                        Additional Info :
                    </div>
                    <hr className='w-100' />
                </div>
                
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