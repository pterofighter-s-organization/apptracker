import { useContext, useEffect, useState, useMemo } from "react";

//components
import { CardList } from "../../components/CardList";
import { FilterDropdown } from "../../components/Dropdowns/FilterDropdown";
import { ErrorDisplay } from "../../components/Displays/ErrorDisplay";
import { LoadingDisplay } from "../../components/Displays/LoadingDisplay";
import { CardListHeader } from "../../components/CardListHeader";
import { ToggleButton } from "../../components/Buttons/ToggleButtons/ToggleButton";

//layouts
import { HeaderLayout } from "../../layouts/HeaderLayout";
import { PageLayout } from "../../layouts/PageLayout";
import { CardsSectionLayout } from "../../layouts/CardsSectionLayout";

//constants
import { APP_STAGE_COLORS, APP_STATUS_COLORS } from "../../constants/constants";

//hocs
import { withStatusControl } from "../../hocs/withStatusControl";

//helpers
import { filterJobsByStage } from "../../helpers/application";
import { filterDataByStatus } from "../../helpers/helpers";

//contexts
import { JobsContext } from "../../hooks/contexts/JobsContext";

function JobBoard({ status, handleStatus }) {

    //the stage filter
    const [stage, setStage] = useState(null)

    const handleStage = (e, option) => {
        e.preventDefault()
        setStage(option)
    }

    const { jobs, getApplications } = useContext(JobsContext)

    useEffect(() => {
        getApplications()
            .then(() => {
                document.title = `Job Board - Job Tracker App`
            })

        return () => document.title = "Job Tracker App"
    }, [getApplications])

    const filteredData = useMemo(() => {
        return (
            filterJobsByStage(stage,
                filterDataByStatus(status, jobs.data)
            )
        )
    }, [jobs.data, status, stage])

    if (jobs.isFetching) {
        return <LoadingDisplay />
    }

    if (jobs.errors) {
        return (
            <ErrorDisplay
                label={"all jobs"}
                errors={jobs.errors}
            />
        )
    }

    return (
        <PageLayout>
            <HeaderLayout>
                <h1>
                    All Jobs
                </h1>
                <h6>
                    Every job you tracked.
                </h6>
            </HeaderLayout>
            <CardsSectionLayout>
                <CardListHeader
                    isArchived={status === "archived"}
                    quantity={filteredData.length}
                    type={"job"}
                />
                <>
                    <FilterDropdown
                        id={"job-board-stage-filter"}
                        label={"stage"}
                        value={stage}
                        options={APP_STAGE_COLORS}
                        isOptionAll={true}
                        handleOption={handleStage}
                    />
                    <ToggleButton
                        value={status}
                        options={APP_STATUS_COLORS}
                        handleOption={handleStatus}
                    />
                </>
                <CardList
                    type={"jobs"}
                    cards={filteredData}
                    isPreview={false}
                    isShow={true}
                />
            </CardsSectionLayout>
        </PageLayout>
    )
}

export default withStatusControl(JobBoard)