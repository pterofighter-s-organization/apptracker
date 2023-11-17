
//components
import { CardList } from "../../components/CardList";

//layouts
import { HeaderLayout } from "../../layouts/HeaderLayout";
import { PageLayout } from "../../layouts/PageLayout";

//hocs
import { withStatusControl } from "../../hocs/withStatusControl";

//css
import "./TaskBoard.css"

function TaskBoard({ status, handleStatus }) {

    const cards = Array.from({ length: 25 }).fill({
        value: "",
        status: status
    })

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
                isPreview={false}
                isShow={true}
            />
        </PageLayout>
    )
}

export default withStatusControl(TaskBoard)