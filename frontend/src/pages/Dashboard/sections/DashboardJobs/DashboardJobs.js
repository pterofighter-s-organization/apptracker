import { useContext, useEffect, useMemo, useState } from "react";

//components
import { LoadingDisplay } from "../../../../components/Displays/LoadingDisplay";
import { ErrorDisplay } from "../../../../components/Displays/ErrorDisplay";
import { CardsHeader } from "../../../../components/Cards/CardsHeader";
import { CardList } from "../../../../components/Cards/CardList";
import { FilterDropdown } from "../../../../components/Dropdowns/FilterDropdown";
import { RedirectButton } from "../../../../components/Buttons/RedirectButton";

//helpers
import { filterDataByStatus } from "../../../../helpers/helpers";
import { filterJobsByStage } from "../../../../helpers/applicationHelpers";

//layouts
import { CardsSectionLayout } from "../../../../layouts/CardsLayout/CardsSectionLayout";
import { CardsHeaderLayout } from "../../../../layouts/CardsLayout/CardsHeaderLayout";

//hocs
import { withStatusControl } from "../../../../hocs/withStatusControl";

//constants
import { APP_STAGE_COLORS, APP_STATUS_COLORS } from "../../../../constants/constants";

//contexts
import { JobsContext } from "../../../../hooks/contexts/JobsContext";


function DashboardJobs({ status, handleStatus, isShow, isPreview }) {

    const [stage, setStage] = useState(null)
    const { jobs, getApplications } = useContext(JobsContext)

    useEffect(() => {
        getApplications()
    }, [getApplications])

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

    if (jobs.loading) {
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
            <CardsHeaderLayout>
                <CardsHeader
                    icon={<i className="bi bi-file-post-fill" />}
                    quantity={filteredData.length}
                    type={"job"}
                    header={status === "archived" ? "to delete" : "to track"}
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
                    <FilterDropdown
                        id={"job-status-filter"}
                        label={"status"}
                        value={status}
                        options={APP_STATUS_COLORS}
                        handleOption={handleStatus}
                    />
                </>
            </CardsHeaderLayout>
            <CardList
                type={"jobs"}
                cards={filteredData}
                isPreview={isPreview}
                isShow={isShow}
            />
            <RedirectButton
                link={`/all-jobs/${status}`}
                label={"link to all jobs"}
            />
        </CardsSectionLayout>
    )
}

export default withStatusControl(DashboardJobs)