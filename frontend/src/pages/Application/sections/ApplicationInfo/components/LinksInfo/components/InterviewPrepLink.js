

export default function InterviewPrepLink({ interviewPreparation }) {

    const showLinkForPrep = interviewPreparation && interviewPreparation.length > 0

    return (
        <div className="d-flex flex-row gap-3">

            <div className="text-nowrap">
                Interview Prep :
            </div>

            {showLinkForPrep ?
                <div className="text-dark-emphasis text-truncate">
                    <a href={interviewPreparation}>
                        {interviewPreparation}
                    </a>
                </div>
                :
                <div className="text-dark-emphasis">
                    No prep doc link
                </div>
            }
        </div>
    )
}