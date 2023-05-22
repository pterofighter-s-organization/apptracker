//components
import CoverLetterLink from "./components/CoverLetterLink"
import InterviewPrepLink from "./components/InterviewPrepLink"
import ResumeLink from "./components/ResumeLink"

export default function LinksInfo({ interviewPreparation, resume, coverLetter, status }) {

    const showInterviewInfo = status !== "applied" && status !== "interested"
    const showResumeCoverLetters = status !== "interested"

    return (
        <div className="d-flex flex-column gap-3 gap-md-4 gap-xl-4 bg-body-secondary p-4 w-100">
            {showInterviewInfo ?
                <InterviewPrepLink
                    interviewPreparation={interviewPreparation}
                />
                :
                <></>
            }
            {showResumeCoverLetters ?
                <>
                    <ResumeLink
                        resume={resume}
                    />
                    <CoverLetterLink
                        coverLetter={coverLetter}
                    />
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