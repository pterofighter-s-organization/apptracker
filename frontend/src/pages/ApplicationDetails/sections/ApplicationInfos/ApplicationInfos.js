//sub-components
import { LinkDisplay } from "./components";

//layouts
import { SubSectionLayout } from "../../../../layouts/SubSectionLayout";
import { PreviewCollapseLayout } from "../../../../layouts/PreviewCollapseLayout";
import { DataLayout } from "../../layouts";

//utils
import * as formatters from "../../../../utils/formatters";

//css
import "./Description.css"

export default function ApplicationInfos({ application }) {

    return (
        <div className="d-flex flex-column gap-3">

            {/* basic info and links */}
            <div className="d-flex flex-column flex-xl-row align-items-stretch gap-3">
                {/* basic info */}
                <div className="d-flex flex-column gap-3 gap-md-4 bg-body-secondary p-4 w-100">
                    <DataLayout title={"Position"}>
                        <div className="text-dark-emphasis">
                            {formatters.textFormatter(application.position)}
                        </div>
                    </DataLayout>
                    <DataLayout title={"Company"}>
                        <div className="text-dark-emphasis">
                            {formatters.textFormatter(application.company)}
                        </div>
                    </DataLayout>
                    <DataLayout title={"Salary"}>
                        <div className="text-dark-emphasis">
                            {application.salary}
                        </div>
                    </DataLayout>
                </div>
                {/* links info */}
                <div className="d-flex flex-column gap-3 gap-md-4 bg-body-secondary p-4 w-100">
                    {application.status !== "interested" ?
                        <>
                            <DataLayout title={"Preparation link"}>
                                <LinkDisplay link={application.interview_preparation} />
                            </DataLayout>
                            <DataLayout title={"Resume link"}>
                                <LinkDisplay link={application.resume_link} />
                            </DataLayout>
                            <DataLayout title={"Cover letter link"}>
                                <LinkDisplay link={application.cover_letter_link} />
                            </DataLayout>
                        </>
                        :
                        <div className="text-dark-emphasis">
                            No links needed for interested applications
                        </div>
                    }
                </div>
            </div>

            {/* description */}
            <SubSectionLayout title={"Description :"} titleFontSize={"fs-5"}>
                <PreviewCollapseLayout
                    id={"description"}
                    text={"Description"}
                    previewVh={40}
                    dependency={application.description}
                >
                    <div className="text-dark-emphasis">
                        <div className="">
                            {/* pre allows mutliline text to be displayed correctly */}
                            <pre className="pb-5" id="app-description">
                                {application.description.length > 0 ? application.description : "No description provided"}
                            </pre>
                        </div>
                    </div>
                </PreviewCollapseLayout>
            </SubSectionLayout>

        </div>
    )
}