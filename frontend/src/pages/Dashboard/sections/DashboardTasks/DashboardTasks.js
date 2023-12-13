import { useContext, useEffect, useMemo } from "react";

//hocs
import { withStatusControl } from "../../../../hocs/withStatusControl";

//layouts
import { CardsSectionLayout } from "../../../../layouts/CardsSectionLayout";

//contexts
import { TasksContext } from "../../../../hooks/contexts/TasksContext";

//components
import { LoadingDisplay } from "../../../../components/Displays/LoadingDisplay";
import { ErrorDisplay } from "../../../../components/Displays/ErrorDisplay";
import { FilterDropdown } from "../../../../components/Dropdowns/FilterDropdown";
import { CardListHeader } from "../../../../components/CardListHeader";
import { CardList } from "../../../../components/CardList";
import { RedirectButton } from "../../../../components/Buttons/RedirectButton";

//helpers
import { filterDataByStatus } from "../../../../helpers/helpers";
import { sortDataByLatest } from "../../../../helpers/helpers";
import { sortTasksByDateDue } from "../../../../helpers/task";

//constants
import { APP_STATUS_COLORS } from "../../../../constants/constants";

function DashboardTasks({ status, handleStatus, isPreview, isShow }) {

    const { tasks, getTasks } = useContext(TasksContext)

    useEffect(() => {
        getTasks()
    }, [getTasks])

    const filteredData = useMemo(() => {
        return filterDataByStatus(status, tasks.data)
    }, [tasks.data, status])

    if (tasks.loading) {
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
            <FilterDropdown
                id={"tasks-status-filter"}
                label={"status"}
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