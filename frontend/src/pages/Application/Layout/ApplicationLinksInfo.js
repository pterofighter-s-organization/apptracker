
export default function ApplicationLinksInfo({ displayData, status }) {

    //maybe change this to button for interview prep and shortcut to appointments
    //interview prep is just a yes or no button, no need to implement qns yet

    const showInterviewInfo = status !== "applied" && status !== "interested"
    const showTextForPrep = displayData.interviewPrep && displayData.interviewPrep.length > 0
    const showResumeCoverLetters = status !== "interested"
    const showTextForResume = displayData.resume.length > 0
    const showTextForCoverLetter = displayData.coverLetter.length > 0

    return (
        <div className="d-flex flex-column gap-3 gap-md-4 gap-xl-5 bg-body-secondary p-4 w-100">
            {showInterviewInfo ?
                <div className="d-flex flex-row gap-3 fs-3">
                    <div className="text-nowrap">
                        Interview Prep :
                    </div>

                    {showTextForPrep ?
                        <div className="text-dark-emphasis text-truncate">
                            <a href={displayData.interviewPrep}>
                                {displayData.interviewPrep}
                            </a>
                        </div>
                        :
                        <div className="text-dark-emphasis">
                            Provide a doc link
                        </div>
                    }
                </div>
                :
                <></>
            }
            {showResumeCoverLetters ?
                <>
                    <div className="d-flex flex-row gap-3 fs-3">
                        <div className="text-nowrap">
                            Resume :
                        </div>
                        {showTextForResume ?
                            <div className="text-dark-emphasis text-truncate">
                                <a href={displayData.resume}>
                                    {displayData.resume}
                                </a>
                            </div>
                            :
                            <div className="text-dark-emphasis text-truncate">
                                Provide resume doc link
                            </div>
                        }
                    </div>
                    <div className="d-flex flex-row gap-3 fs-3">
                        <div className="text-nowrap">
                            Cover letter :
                        </div>
                        {showTextForCoverLetter ?
                            <div className="text-dark-emphasis text-truncate">
                                <a href={displayData.coverLetter}>
                                    {displayData.coverLetter}
                                </a>
                            </div>
                            :
                            <div className="text-dark-emphasis text-truncate">
                                Provide a cover letter link
                            </div>
                        }
                    </div>
                </>
                :
                <>
                    <div className="d-flex flex-row gap-3 fs-3">
                        <div className="text-nowrap">
                            Resume :
                        </div>
                        <div className="text-dark-emphasis text-truncate">
                            Resume not needed
                        </div>
                    </div>
                    <div className="d-flex flex-row gap-3 fs-3">
                        <div className="text-nowrap">
                            Cover letter :
                        </div>
                        <div className="text-dark-emphasis text-truncate">
                            Cover letter not needed
                        </div>
                    </div>
                </>
            }
        </div>
    )
}