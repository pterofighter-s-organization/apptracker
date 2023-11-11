
//components
import { TaskList } from "../../components/Lists/TaskList";

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
            <TaskList
                id={"task-list"}
                isPreview={false}
                cards={cards}
                status={status}
            />
        </PageLayout>
    )
}

export default withStatusControl(TaskBoard)