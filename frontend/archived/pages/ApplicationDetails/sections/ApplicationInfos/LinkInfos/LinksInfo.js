

export default function LinksInfo(props) {

    const {
        interviewPreparation,
        resume,
        coverLetter,
        status
    } = props

    return (
        <div className="d-flex flex-column gap-3 gap-md-4 bg-body-secondary p-4 w-100">

            {status !== "interested" ?
                <div className="d-flex flex-row gap-3">
                    <div className="text-nowrap">
                        Interview Prep :
                    </div>
                    {interviewPreparation.length > 0 ?
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
                :
                <></>
            }

            {status !== "interested" ?
                <>
                    <div className="d-flex flex-row gap-3" id="resume">
                        <div className="text-nowrap">
                            Resume :
                        </div>
                        {resume.length > 0 ?
                            <div className="text-dark-emphasis text-truncate">
                                <a href={resume}>
                                    {resume}
                                </a>
                            </div>
                            :
                            <div className="text-dark-emphasis">
                                No resume link
                            </div>
                        }
                    </div>

                    <div className="d-flex flex-row gap-3">
                        <div className="text-nowrap">
                            Cover letter :
                        </div>
                        {coverLetter.length > 0 ?
                            <div className="text-dark-emphasis text-truncate">
                                <a href={coverLetter}>
                                    {coverLetter}
                                </a>
                            </div>
                            :
                            <div className="text-dark-emphasis">
                                No cover letter link
                            </div>
                        }
                    </div>
                </>
                :
                <>
                    <div className="d-flex flex-row gap-3" id="resume">
                        <div className="text-nowrap">
                            Resume :
                        </div>
                        <div className="text-dark-emphasis">
                            Resume not needed
                        </div>
                    </div>
                    <div className="d-flex flex-row gap-3">
                        <div className="text-nowrap">
                            Cover letter :
                        </div>
                        <div className="text-dark-emphasis">
                            Cover letter not needed
                        </div>
                    </div>
                </>
            }

        </div>
    )
}