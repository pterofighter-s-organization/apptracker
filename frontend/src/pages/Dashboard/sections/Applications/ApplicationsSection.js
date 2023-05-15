//components
import CategorizedApplicationList from "../../../../components/Lists/CategorizedApplicationList.js"
import PreviewCollapse from "../../../../components/PreviewCollapse/PreviewCollapse.js"

export default function ApplicationsSection({ applications, updateApplication }) {

    const appsVh = 40

    return (
        <div className="d-flex flex-column gap-2">
            <div className="d-flex flex-column gap-1">
                <div className="h3">
                    Your Job Applications
                </div>
                {/* <h1 className="text-nowrap">
                        ( {categorizedApps.interviewing.length} )
                    </h1> */}
                <hr className="" style={{}} />
            </div>
            {/* the collapse (only the buttons and the bg uses same elements)*/}
            {/* giving more flexibility to the container that uses the collapse */}
            <div style={{ position: "relative" }}>
                <div
                    id="collapse-apps"
                    style={{ maxHeight: appsVh.toString() + "vh", overflow: "hidden" }}
                >
                    <div
                        className="d-flex flex-wrap justify-content-evenly justify-content-xl-start gap-3 gap-xl-4"
                        id="dashboard-apps"
                    >
                        <CategorizedApplicationList
                            applications={applications}
                            updateApplication={updateApplication}
                        />
                    </div>

                </div>
                {/* it's also flexible to decide when to show these elements, custom function, not req for the elements to work*/}
                <PreviewCollapse
                    text={"Applications"}
                    maxVhOfCollapse={appsVh}
                    collapseId={"collapse-apps"}
                    overflow={"hidden"}
                    dependency={applications}
                />
            </div>
        </div>
    )
}