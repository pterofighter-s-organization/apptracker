
//components
import { ApplicationList } from "../../components/Lists/ApplicationList";

//layouts
import { HeaderLayout } from "../../layouts/HeaderLayout";
import { PageLayout } from "../../layouts/PageLayout";

//css
import "./JobList.css"

export default function JobList() {

    return (
        <PageLayout>
            <HeaderLayout title={"all job applications"}>
                Every job from <i>interviewing to interested.</i>
            </HeaderLayout>
            <ApplicationList />
        </PageLayout>
    )
}