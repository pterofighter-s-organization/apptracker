//components
import PreviewCollapse from "../../../components/Collapse/PreviewCollapse"

export default function ApplicationDescription({ description, id }) {

    //let dependency be id, description might not change at all sometimes, but id will

    return (
        <div className="d-flex flex-column gap-3 gap-md-4 gap-xl-5 bg-body-secondary w-100 p-4">
            <div className="d-flex flex-column gap-2 fs-3 ">
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
                                <pre  style={{maxWidth: "80vw"}}>
                                    {description}
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