//components
import DateAndTime from "../../../components/Date/DateAndTime"

export default function ApplicationLinksInfo({ displayData }) {

    //maybe change this to button for interview prep and shortcut to appointments
    //interview prep is just a yes or no button, no need to implement qns yet

    return (
        <div className="d-flex flex-column gap-3 gap-md-4 gap-xl-5 bg-body-secondary p-4 w-100">
            <div className="d-flex flex-row gap-3 fs-3">
                <div className="">
                    Applied :
                </div>
                <div className="text-dark-emphasis">
                    <DateAndTime date={displayData.dateApplied} />
                </div>
            </div>
            <div className="d-flex flex-row gap-3 fs-3">
                <div className="">
                    Resume :
                </div>
                <div className="text-dark-emphasis">
                    <a href={displayData.resume}>
                        {displayData.resume}
                    </a>
                </div>
            </div>
            <div className="d-flex flex-row gap-3 fs-3">
                <div className="">
                    Cover letter :
                </div>
                <div className="text-dark-emphasis">
                    <a href={displayData.coverLetter}>
                        {displayData.coverLetter}
                    </a>
                </div>
            </div>
        </div>
    )
}