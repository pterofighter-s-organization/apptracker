
export default function SubSectionLayout({ children, title }) {

    return (
        <div className="d-flex flex-column bg-body-secondary w-100 p-4">
            <div className="d-flex flex-column gap-2 ">
                <div className="text-nowrap">
                    {title}
                </div>
                <hr />

                {children}
            </div>
        </div>
    )
}