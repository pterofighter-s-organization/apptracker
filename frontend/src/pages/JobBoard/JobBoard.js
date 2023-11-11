
//components
import { JobCard } from "../../components/Cards/JobCard";
import { CardList } from "../../components/CardList";

//layouts
import { HeaderLayout } from "../../layouts/HeaderLayout";
import { PageLayout } from "../../layouts/PageLayout";

//hocs
import withStatusControl from "../../hocs/withStatusControl";

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
            <CardList
                type={"jobs"}
                cards={cards}
                CardComponent={JobCard}
                isPreview={false}
                isRedirect={false}
                status={status}
            />
        </PageLayout>
    )
}

export default withStatusControl(JobBoard)