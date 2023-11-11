
//components
import { ApplicationList } from "../../components/Lists/ApplicationList";

//layouts
import { HeaderLayout } from "../../layouts/HeaderLayout";
import { PageLayout } from "../../layouts/PageLayout";

//hocs
import withStatusControl from "../../hoc/withStatusControl";

//css
import "./JobBoard.css"

function JobBoard({ status, handleStatus }) {

    const cards = Array.from({ length: 25 }, (_, index) => index + 1)

    return (
        <PageLayout>
            <HeaderLayout
                title={"all job applications"}
                status={status}
                handleStatus={handleStatus}
            >
                Every job from <i>interviewing to interested.</i>
            </HeaderLayout>
            <ApplicationList
                id={"app-list"}
                isPreview={false}
                status={status}
                cards={cards}
            />
        </PageLayout>
    )
}

export default withStatusControl(JobBoard)