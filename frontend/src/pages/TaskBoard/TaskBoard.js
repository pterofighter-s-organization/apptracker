import { useContext, useEffect, useMemo } from "react";

//components
import { CardList } from "../../components/CardList";

//layouts
import { HeaderLayout } from "../../layouts/HeaderLayout";
import { PageLayout } from "../../layouts/PageLayout";

//hocs
import { withStatusControl } from "../../hocs/withStatusControl";

//helpers
import { filterDataByStatus, sortDataByLatest } from "../../helpers/helpers";
import { handleAPIErrors } from "../../helpers/formHelpers";
import { sortTasksByDateDue } from "../../helpers/taskHelpers";

//context
import { TasksContext } from "../../hooks/contexts/TasksContext";

//css
import "./TaskBoard.css"
import { ErrorDisplay } from "../../components/ErrorDisplay";

function TaskBoard({ status, handleStatus }) {

    const { tasks, getTasks } = useContext(TasksContext)

    useEffect(() => {
        getTasks()
    }, [getTasks])

    const filteredData = useMemo(() => {
        return filterDataByStatus(status, tasks.data)
    }, [tasks.data, status])

    if (tasks.loading) {
        return <>Loading...</>
    }

    if (tasks.errors) {
        return (
            <ErrorDisplay
                label={"tasks"}
                errors={tasks.errors}
            />
        )
    }

    return (
        <PageLayout>
            <HeaderLayout
                title={"my job tasks"}
                text={
                    <>
                        Shows all the tasks you created for each job application.
                    </>
                }
                status={status}
                handleStatus={handleStatus}
            />
            <CardList
                type={"tasks"}
                cards={
                    status === "archived" ?
                        sortDataByLatest(filteredData)
                        :
                        sortTasksByDateDue(filteredData)
                }
                isPreview={false}
                isShow={true}
            />
        </PageLayout>
    )
}

export default withStatusControl(TaskBoard)