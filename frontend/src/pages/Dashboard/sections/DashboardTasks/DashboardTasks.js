import { useContext, useEffect, useMemo, useState } from "react";

//hocs
import { withStatusControl } from "../../../../hocs/withStatusControl";

//layouts
import { CardsSectionLayout } from "../../../../layouts/CardsSectionLayout";

//contexts
import { TasksContext } from "../../../../hooks/contexts/TasksContext";

//components
import { LoadingDisplay } from "../../../../components/Displays/LoadingDisplay";
import { ErrorDisplay } from "../../../../components/Displays/ErrorDisplay";
import { CardListHeader } from "../../../../components/CardListHeader";
import { CardList } from "../../../../components/CardList";
import { RedirectButton } from "../../../../components/Buttons/RedirectButton";
import { ToggleButton } from "../../../../components/Buttons/ToggleButtons/ToggleButton";

//helpers
import { filterDataByStatus } from "../../../../helpers/helpers";
import { sortDataByLatest } from "../../../../helpers/helpers";
import { sortTasksByDateDue } from "../../../../helpers/task";

//constants
import { APP_STATUS_COLORS } from "../../../../constants/constants";

function DashboardTasks({ isRefresh, status, handleStatus, isPreview, isShow }) {

    const { tasks, getTasks } = useContext(TasksContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        getTasks()
            .finally(() => {
                setIsLoading(false)
            })
    }, [getTasks, isRefresh, setIsLoading])

    const filteredData = useMemo(() => {
        return filterDataByStatus(status, tasks.data)
    }, [tasks.data, status])

    if (isLoading || isRefresh) {
        return (
            <LoadingDisplay />
        )
    }

    if (tasks.errors) {
        return (
            <ErrorDisplay
                label={"tasks"}
                errors={tasks.errors}
                isSection={true}
            />
        )
    }

    return (
        <CardsSectionLayout isPreview={isPreview}>
            <CardListHeader
                isArchived={status === "archived"}
                quantity={filteredData.length}
                type={"task"}
            />
            <ToggleButton
                value={status}
                options={APP_STATUS_COLORS}
                handleOption={handleStatus}
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
            <RedirectButton
                link={`/all-tasks/${status}`}
                label={"link to all tasks"}
            />
        </CardsSectionLayout>
    )
}

export default withStatusControl(DashboardTasks)