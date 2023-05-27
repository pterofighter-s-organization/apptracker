


export default function CoverLetterLink({ coverLetter }) {

    const showLinkForCoverLetter = coverLetter.length > 0

    return (
        <div className="d-flex flex-row gap-3">
            <div className="text-nowrap">
                Cover letter :
            </div>
            {showLinkForCoverLetter ?
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
    )
}