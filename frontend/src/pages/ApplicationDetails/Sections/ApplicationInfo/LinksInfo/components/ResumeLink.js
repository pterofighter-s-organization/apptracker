

export default function ResumeLink({ resume }) {

    const showLinkForResume = resume.length > 0
    
    return (
        <div className="d-flex flex-row gap-3" id="resume">
            <div className="text-nowrap">
                Resume :
            </div>
            {showLinkForResume ?
                <div className="text-dark-emphasis text-truncate">
                    <a href={resume}>
                        {resume}
                    </a>
                </div>
                :
                <div className="text-dark-emphasis text-truncate">
                    Provide resume doc link
                </div>
            }
        </div>
    )
}