
//components
import { ApplicationList } from "../../components/Lists/ApplicationList";

//layouts
import { HeaderLayout } from "../../layouts/HeaderLayout";
import { PageLayout } from "../../layouts/PageLayout";

//css
import "./JobBoard.css"

export default function JobBoard() {

    const cards = Array.from({ length: 30 }, (_, index) => index + 1)

    return (
        <PageLayout>
            <HeaderLayout title={"all job applications"}>
                Every job from <i>interviewing to interested.</i>
            </HeaderLayout>
            <ApplicationList
                id={"app-list"}
                cardX={17.5}
                cardY={15}
                isPreview={true}
                cards={cards}
            />
        </PageLayout>
    )
}