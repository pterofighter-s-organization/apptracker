

export default function InterviewPrepLink({ interviewPrep }) {

    const showLinkForPrep = interviewPrep && interviewPrep.length > 0

    return (
        <div className="d-flex flex-row gap-3">

            <div className="text-nowrap">
                Interview Prep :
            </div>

            {showLinkForPrep ?
                <div className="text-dark-emphasis text-truncate">
                    <a href={interviewPrep}>
                        {interviewPrep}
                    </a>
                </div>
                :
                <div className="text-dark-emphasis">
                    Provide a doc link
                </div>
            }
        </div>
    )
}