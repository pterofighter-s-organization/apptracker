//components
import PreviewCollapse from "../../../../../components/PreviewCollapse/PreviewCollapse"

//css
import "./Description.css"

export default function Description({ description }) {

    //let dependency be id, description might not change at all sometimes, but id will

    return (
        <div className="d-flex flex-column bg-body-secondary w-100 p-4 fs-4">
            <div className="d-flex flex-column gap-2 ">
                <div className="">
                    Job description :
                </div>
                <hr />
                <div style={{ position: "relative" }}>
                    <div
                        id="collapse-app-description"
                        style={{ maxHeight: "20vh", overflow: "hidden" }}
                    >
                        <div
                            className="text-dark-emphasis"
                            id="application-description"
                        >
                            <div className="fs-5">
                                {/* pre allows mutliline text to be displayed correctly */}
                                <pre className="app-description pb-5">
                                    {description && description.length > 0 ? description : "No description provided"}
                                </pre>
                            </div>
                        </div>
                    </div>
                    <PreviewCollapse
                        text={"Text"}
                        maxVhOfCollapse={20}
                        collapseId={"collapse-app-description"}
                        overflow={"hidden"}
                        dependency={description}
                    />
                </div>
            </div>
        </div>
    )
}