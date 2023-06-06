
export default function LinkDisplay({ link }) {

    return (
        <>
            {link.length > 0 ?
                <div className="text-dark-emphasis text-truncate">
                    <a href={link}>
                        {link}
                    </a>
                </div>
                :
                <div className="text-dark-emphasis">
                    Not specified
                </div>
            }
        </>
    )
}