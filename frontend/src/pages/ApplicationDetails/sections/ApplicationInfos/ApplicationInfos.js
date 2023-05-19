
//components
import BasicInfos from "./BasicInfos/BasicInfos"
import Description from "./Description/Description"
import LinksInfo from "./LinkInfos/LinksInfo"


export default function ApplicationInfos(props) {

    const {
        application,
        fontSize,
    } = props

    return (
        <div
            className={`${fontSize}`}
            id="interview-preparation"
        >

            {/* title */}
            <div className="d-flex flex-column gap-0">
                <div className='h4 text-nowrap'>
                    Application Info :
                </div>
                <hr className='w-100' />
            </div>

            <div className="d-flex flex-column gap-3">

                {/* basic info and links */}
                <div className="d-flex flex-column flex-xl-row align-items-stretch gap-3">

                    {/* basic info */}
                    <BasicInfos
                        position={application.position}
                        company={application.company}
                        salary={application.salary}
                    />

                    {/* links */}
                    <LinksInfo
                        interviewPreparation={application.interviewPreparation}
                        status={application.status}
                        resume={application.resume}
                        coverLetter={application.coverLetter}
                    />

                </div>

                {/* description */}
                <Description
                    description={application.description}
                />

            </div>

        </div>
    )
}