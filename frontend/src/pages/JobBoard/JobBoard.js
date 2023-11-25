import { useContext, useEffect, useState } from "react";

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

    if (jobs.loading) {
        return <>Loading...</>
    }

    return (
        <PageLayout>
            <HeaderLayout
                title={"my job applications"}
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
            >
                Every job from <i>interviewing to interested.</i>
            </HeaderLayout>
            <CardList
                type={"jobs"}
                cards={
                    filterJobsByStage(stage,
                        filterDataByStatus(status, jobs.data)
                    )
                }
                isPreview={false}
                isShow={true}
            />
        </PageLayout>
    )
}

export default withStatusControl(JobBoard)