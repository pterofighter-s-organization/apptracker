import { useContext, useEffect, useMemo } from "react";

//hocs
import { withStatusControl } from "../../../../hocs/withStatusControl";

//layouts
import { CardsSectionLayout } from "../../../../layouts/CardsLayout/CardsSectionLayout";
import { CardsHeaderLayout } from "../../../../layouts/CardsLayout/CardsHeaderLayout";

//contexts
import { TasksContext } from "../../../../hooks/contexts/TasksContext";

//components
import { CardsHeader } from "../../../../components/Cards/CardsHeader";
import { LoadingDisplay } from "../../../../components/Displays/LoadingDisplay";
import { ErrorDisplay } from "../../../../components/Displays/ErrorDisplay";
import { FilterDropdown } from "../../../../components/Dropdowns/FilterDropdown";
import { CardList } from "../../../../components/Cards/CardList";
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
            <CardsHeaderLayout>
                <CardsHeader
                    icon={<i className="bi bi-view-list" />}
                    quantity={filteredData.length}
                    type={"task"}
                    header={status === "archived" ? "to remove" : "to finish"}
                />
                <FilterDropdown
                    id={"tasks-status-filter"}
                    label={"status"}
                    value={status}
                    options={APP_STATUS_COLORS}
                    handleOption={handleStatus}
                />
            </CardsHeaderLayout>
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