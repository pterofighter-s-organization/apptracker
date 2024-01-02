import { useContext, useEffect, useMemo, useState } from "react";

//components
import { LoadingDisplay } from "../../../../components/Displays/LoadingDisplay";
import { ErrorDisplay } from "../../../../components/Displays/ErrorDisplay";
import { CardListHeader } from "../../../../components/CardListHeader";
import { CardList } from "../../../../components/CardList";
import { FilterDropdown } from "../../../../components/Dropdowns/FilterDropdown";
import { RedirectButton } from "../../../../components/Buttons/RedirectButton";

//helpers
import { filterDataByStatus } from "../../../../helpers/helpers";
import { filterJobsByStage } from "../../../../helpers/application";

//layouts
import { CardsSectionLayout } from "../../../../layouts/CardsSectionLayout";

//hocs
import { withStatusControl } from "../../../../hocs/withStatusControl";

//constants
import { APP_STAGE_COLORS, APP_STATUS_COLORS } from "../../../../constants/constants";

//contexts
import { JobsContext } from "../../../../hooks/contexts/JobsContext";
import { ToggleButton } from "../../../../components/Buttons/ToggleButtons/ToggleButton";


function DashboardJobs({ setIsRefresh, status, handleStatus, isShow, isPreview }) {

    const [stage, setStage] = useState(null)
    const [isFetching, setIsFetching] = useState(true)
    const { jobs, getApplications } = useContext(JobsContext)

    useEffect(() => {
        setIsFetching(true)
        getApplications()
            .finally(() => {
                setIsFetching(false)
            })
    }, [getApplications, setIsFetching])

    useEffect(() => {
        setIsRefresh(jobs.isRefresh)
    }, [jobs.isRefresh, setIsRefresh])

    const handleStage = (e, option) => {
        e.preventDefault()
        setStage(option)
    }

    const filteredData = useMemo(() => {
        return (
            filterJobsByStage(stage,
                filterDataByStatus(status, jobs.data)
            )
        )
    }, [status, stage, jobs.data])

    if (isFetching) {
        return (
            <LoadingDisplay />
        )
    }

    if (jobs.errors) {
        return (
            <ErrorDisplay
                label={"jobs"}
                errors={jobs.errors}
                isSection={true}
            />
        )
    }

    return (
        <CardsSectionLayout isPreview={isPreview}>
            <CardListHeader
                isArchived={status === "archived"}
                quantity={filteredData.length}
                type={"job"}
            />
            <>
                <FilterDropdown
                    id={"job-stage-filter"}
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
                isPreview={isPreview}
                isShow={isShow}
            />
            <RedirectButton
                link={`/auth/jobs/${status}`}
                label={"link to all jobs"}
            />
        </CardsSectionLayout>
    )
}

export default withStatusControl(DashboardJobs)