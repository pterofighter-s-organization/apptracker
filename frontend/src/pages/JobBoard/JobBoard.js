
//components
import { CardList } from "../../components/CardList";

//layouts
import { HeaderLayout } from "../../layouts/HeaderLayout";
import { PageLayout } from "../../layouts/PageLayout";

//hocs
import withStatusControl from "../../hocs/withStatusControl";

//css
import "./JobBoard.css"

function JobBoard({ status, handleStatus }) {

    const cards = Array.from({ length: 25 }).fill({
        value: "",
        status: status
    })

    return (
        <PageLayout>
            <HeaderLayout
                title={"my job applications"}
                status={status}
                handleStatus={handleStatus}
            >
                Every job from <i>interviewing to interested.</i>
            </HeaderLayout>
            <CardList
                type={"jobs"}
                cards={cards}
                status={status}
                isPreview={false}
                isShow={true}
            />
        </PageLayout>
    )
}

export default withStatusControl(JobBoard)