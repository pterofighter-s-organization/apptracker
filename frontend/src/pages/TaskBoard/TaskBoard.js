
//components
import { CardList } from "../../components/CardList";

//layouts
import { HeaderLayout } from "../../layouts/HeaderLayout";
import { PageLayout } from "../../layouts/PageLayout";

//hocs
import withStatusControl from "../../hocs/withStatusControl";

//css
import "./TaskBoard.css"

function TaskBoard({ status, handleStatus }) {

    const cards = Array.from({ length: 25 }, (_, index) => index + 1)

    return (
        <PageLayout>
            <HeaderLayout
                title={"my job tasks"}
                status={status}
                handleStatus={handleStatus}
            >
                Shows all the tasks you created for each job application.
            </HeaderLayout>
            <CardList
                type={"tasks"}
                cards={cards}
                status={status}
                isPreview={false}
                isShow={false}
            />
        </PageLayout>
    )
}

export default withStatusControl(TaskBoard)