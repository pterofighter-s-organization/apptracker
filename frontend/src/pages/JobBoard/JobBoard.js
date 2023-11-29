import { useContext, useEffect, useState, useMemo } from "react";

//components
import { CardList } from "../../components/CardList";
import { FilterDropdown } from "../../components/Dropdowns/FilterDropdown";

//layouts
import { HeaderLayout } from "../../layouts/HeaderLayout";
import { PageLayout } from "../../layouts/PageLayout";

//constants
import { APP_STAGE_COLORS } from "../../constants/constants";

//hocs
import { withStatusControl } from "../../hocs/withStatusControl";

//helpers
import { filterJobsByStage } from "../../helpers/applicationHelpers";
import { filterDataByStatus } from "../../helpers/helpers";
import { handleAPIErrors } from "../../helpers/formHelpers";

//context-providers
import { JobsContext } from "../../hooks/contexts/JobsContext";

//css
import "./JobBoard.css"

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
    }, [getApplications])

    const filteredData = useMemo(() => {
        return (
            filterJobsByStage(stage,
                filterDataByStatus(status, jobs.data)
            )
        )
    }, [jobs.data, status, stage])

    if (jobs.loading) {
        return <>Loading...</>
    }

    if (jobs.errors) {
        return (
            <>
                Job page {
                    handleAPIErrors({
                        errors: jobs.errors
                    })
                }...
            </>
        )
    }

    return (
        <PageLayout>
            <HeaderLayout
                title={"my job applications"}
                text={
                    <>
                        Every job from <i>interviewing to interested.</i>
                    </>
                }
                status={status}
                handleStatus={handleStatus}
                Components={
                    <FilterDropdown
                        id={"stage-filter"}
                        label={"stage"}
                        value={stage}
                        isOptionAll={true}
                        options={APP_STAGE_COLORS}
                        handleOption={handleStage}
                    />
                }
            />
            <CardList
                type={"jobs"}
                cards={filteredData}
                isPreview={false}
                isShow={true}
            />
        </PageLayout>
    )
}

export default withStatusControl(JobBoard)