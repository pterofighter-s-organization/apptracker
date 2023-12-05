import { useContext, useEffect, useMemo } from "react";

//components
import { CardList } from "../../components/CardList";
import { ErrorDisplay } from "../../components/Displays/ErrorDisplay";
import { LoadingDisplay } from "../../components/Displays/LoadingDisplay";
import { FilterDropdown } from "../../components/Dropdowns/FilterDropdown";

//layouts
import { HeaderLayout } from "../../layouts/HeaderLayout1";
import { PageLayout } from "../../layouts/PageLayout";
import { CardsHeaderLayout } from "../../layouts/CardsLayout/CardsHeaderLayout";
import { CardsSectionLayout } from "../../layouts/CardsLayout/CardsSectionLayout";

//hocs
import { withStatusControl } from "../../hocs/withStatusControl";

//helpers
import { filterDataByStatus, sortDataByLatest } from "../../helpers/helpers";
import { sortTasksByDateDue } from "../../helpers/taskHelpers";

//constants
import { APP_STATUS_COLORS } from "../../constants/constants";

//context
import { TasksContext } from "../../hooks/contexts/TasksContext";

//css
import "./TaskBoard.css"
import { CardsHeader } from "../../components/CardsHeader";

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
                    isPreview={false}
                    isShow={true}
                />
            </CardsSectionLayout>
        </PageLayout>
    )
}

export default withStatusControl(TaskBoard)