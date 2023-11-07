
//components
import { ApplicationList } from "../../components/Lists/ApplicationList";

//layouts
import { HeaderLayout } from "../../layouts/HeaderLayout";
import { PageLayout } from "../../layouts/PageLayout";

//css
import "./JobBoard.css"

export default function JobBoard() {

    return (
        <PageLayout>
            <HeaderLayout title={"all job applications"}>
                Every job from <i>interviewing to interested.</i>
            </HeaderLayout>
            <ApplicationList />
        </PageLayout>
    )
}