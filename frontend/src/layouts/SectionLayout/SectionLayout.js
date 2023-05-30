
export default function SectionLayout({ children, title }) {

    return (
        <div className="d-flex flex-column gap-2 w-100">

            <div className="d-flex flex-column gap-1">
                <div className="h4 textwrap">
                    {title}
                </div>
                {/* <h1 className="text-nowrap">
                        ( {categorizedApps.interviewing.length} )
                    </h1> */}
                <hr className="w-100" style={{}} />
            </div>

            {children}

        </div>
    )
}