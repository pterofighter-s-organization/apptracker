import { useContext, useEffect, useMemo } from "react";

//components
import { CardList } from "../../components/CardList";
import { ErrorDisplay } from "../../components/Displays/ErrorDisplay";
import { LoadingDisplay } from "../../components/Displays/LoadingDisplay";
import { FilterDropdown } from "../../components/Dropdowns/FilterDropdown";
import { CardListHeader } from "../../components/CardListHeader";

//layouts
import { HeaderLayout } from "../../layouts/HeaderLayout";
import { PageLayout } from "../../layouts/PageLayout";
import { CardsSectionLayout } from "../../layouts/CardsSectionLayout";

//hocs
import { withStatusControl } from "../../hocs/withStatusControl";

//helpers
import { filterDataByStatus, sortDataByLatest } from "../../helpers/helpers";
import { sortTasksByDateDue } from "../../helpers/task";

//constants
import { APP_STATUS_COLORS } from "../../constants/constants";

//context
import { TasksContext } from "../../hooks/contexts/TasksContext";

function TaskBoard({ status, handleStatus }) {

    const { tasks, getTasks } = useContext(TasksContext)

    useEffect(() => {
        getTasks().then((result) => {
            if (result.success) {
                document.title = `Task Board - Job Tracker App`
            }
        })

        return () => document.title = "Job Tracker App"
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
                label={"all tasks"}
                errors={tasks.errors}
            />
        )
    }

    return (
        <PageLayout>
            <HeaderLayout>
                <h1>
                    All Tasks
                </h1>
                <h6>
                    Every task you created.
                </h6>
            </HeaderLayout>
            <CardsSectionLayout>
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
                    isPreview={false}
                    isShow={true}
                />
            </CardsSectionLayout>
        </PageLayout>
    )
}

export default withStatusControl(TaskBoard)