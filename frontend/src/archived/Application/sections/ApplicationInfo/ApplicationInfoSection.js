//parts
import LinksInfo from "./components/LinksInfo/LinksInfo"
import NamesInfo from "./components/NamesInfo/NamesInfo"
import Description from "./components/Description/Description"

export default function ApplicationInfoSection({ application }) {

    return (
        <div 
            className="d-flex flex-column gap-lg-3 fs-5" 
            id="interview-preparation"
        >
            <div className="d-flex flex-column gap-0">
                <div className='h3 text-nowrap'>
                    Application Info :
                </div>
                <hr className='w-100' />
            </div>
            <div className="d-flex flex-column gap-3 gap-md-4 gap-xl-5">
                <div className="d-flex flex-column flex-xl-row align-items-stretch gap-3 gap-md-4 gap-xl-5">
                    <NamesInfo
                        position={application.position}
                        salary={application.salary}
                        company={application.company}
                    />
                    <LinksInfo
                        interviewPreparation={application.interviewPreparation}
                        resume={application.resume}
                        coverLetter={application.coverLetter}
                        status={application.status}
                    />
                </div>
                <Description
                    description={application.description}
                />
            </div>
        </div>
    )
}