
//components
import { TaskList } from "../../components/Lists/TaskList";

//layouts
import { HeaderLayout } from "../../layouts/HeaderLayout";
import { PageLayout } from "../../layouts/PageLayout";

//css
import "./TaskBoard.css"

export default function TaskBoard() {

    return (
        <PageLayout>
            <HeaderLayout title={"all job tasks"}>
                Shows all the tasks you created for each job application.
            </HeaderLayout>
            <TaskList/>
        </PageLayout>
    )
}