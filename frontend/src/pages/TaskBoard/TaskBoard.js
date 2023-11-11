
//components
import { TaskCard } from "../../components/Cards/TaskCard";
import { CardList } from "../../components/CardList";

//layouts
import { HeaderLayout } from "../../layouts/HeaderLayout";
import { PageLayout } from "../../layouts/PageLayout";

//hocs
import withStatusControl from "../../hoc/withStatusControl";

//css
import "./TaskBoard.css"

function TaskBoard({status, handleStatus}) {

    const cards = Array.from({ length: 25 }, (_, index) => index + 1)

    return (
        <PageLayout>
            <HeaderLayout 
                title={"all job tasks"}
                status={status}
                handleStatus={handleStatus}
            >
                Shows all the tasks you created for each job application.
            </HeaderLayout>
            <CardList
                type={"tasks"}
                cards={cards}
                CardComponent={TaskCard}
                status={status}
                isPreview={false}
            />
        </PageLayout>
    )
}

export default withStatusControl(TaskBoard)