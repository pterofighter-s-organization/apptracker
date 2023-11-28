
//components
import { SectionHeader } from "../../../../components/SectionHeader"
import { CardList } from "../../../../components/CardList"
import { RedirectButton } from "../../../../components/Buttons/RedirectButton"
import { useContext, useEffect, useMemo } from "react"
import { TasksContext } from "../../../../hooks/contexts/TasksContext"
import { handleAPIErrors } from "../../../../helpers/formHelpers"
import { filterDataByStatus, sortDataByLatest } from "../../../../helpers/helpers"
import { sortTasksByDateDue } from "../../../../helpers/taskHelpers"

//css

export default function DashboardTasks({ status, isPreview, isShow }) {

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
            <>
                Tasks{
                    handleAPIErrors({
                        errors: tasks.errors
                    })
                }...
            </>
        )
    }

    return (
        <>
            <SectionHeader
                IconComponent={<i className="bi bi-view-list" />}
                title={`${filteredData.length} tasks ${status === "archived" ? "to delete" : "coming up"}`}
                ButtonComponent={
                    <RedirectButton
                        link={"/all-tasks/" + status}
                        label={`all tasks`}
                    />
                }
            />
            <CardList
                type={"tasks"}
                cards={
                    status === "archived" ?
                        sortDataByLatest(filteredData)
                        :
                        sortTasksByDateDue(filteredData)
                }
                isPreview={isPreview}
                isShow={isShow}
            />
        </>
    )
}