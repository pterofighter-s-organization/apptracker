import { useContext, useEffect, useMemo, useState } from "react";

//components
import { CardList } from "../../components/CardList";
import { ErrorDisplay } from "../../components/Displays/ErrorDisplay";
import { LoadingDisplay } from "../../components/Displays/LoadingDisplay";
import { ToggleButton } from "../../components/Buttons/ToggleButtons/ToggleButton";
import { CardListHeader } from "../../components/CardListHeader";

//layouts
import { HeaderLayout } from "../../layouts/HeaderLayout";
import { CardsSectionLayout } from "../../layouts/CardsSectionLayout";
import { PageLayout } from "../../layouts/PageLayout";

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
    const [isFetching, setIsFetching] = useState(true)

    useEffect(() => {
        setIsFetching(true)
        getTasks()
            .then(() => {
                document.title = `Task Board - Job Tracker App`
            })
            .finally(() => {
                setIsFetching(false)
            })

        return () => document.title = "Job Tracker App"
    }, [getTasks, setIsFetching])

    const filteredData = useMemo(() => {
        return filterDataByStatus(status, tasks.data)
    }, [tasks.data, status])

    if (isFetching) {
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
                    isPreview={false}
                    isShow={true}
                />
            </CardsSectionLayout>
        </PageLayout>
    )
}

export default withStatusControl(TaskBoard)