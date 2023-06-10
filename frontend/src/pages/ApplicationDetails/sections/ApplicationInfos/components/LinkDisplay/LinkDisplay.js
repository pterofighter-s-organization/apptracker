
export default function LinkDisplay({ link, label }) {

    return (
        <>
            {link.length > 0 ?
                <a href={link} data-bs-toggle="tooltip" data-bs-placement="right" title={link}>
                    <div className="text-truncate">
                        Click to visit the {label}
                    </div>
                </a>
                :
                <div className="text-dark-emphasis">
                    Not specified
                </div>
            }
        </>
    )
}