
export default function SubSectionLayout({ children, title, titleFontSize }) {

    return (
        <div className="d-flex flex-column bg-body-secondary w-100 p-4">
            <div className="d-flex flex-column gap-2 mb-1 mb-xl-2">
                <div className={`text-nowrap ${titleFontSize}`}>
                    {title}
                </div>
                <hr />

                {children}
            </div>
        </div>
    )
}