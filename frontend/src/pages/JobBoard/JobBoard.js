import { useState } from "react";

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

//css
import "./JobBoard.css"

function JobBoard({ status, handleStatus }) {

    //the stage filter
    const [stage, setStage] = useState(null)

    const handleStage = (e, option) => {
        e.preventDefault()
        setStage(option)
    }

    const cards = Array.from({ length: 25 }).fill({
        value: "",
        status: status
    })

    return (
        <PageLayout>
            <HeaderLayout
                title={"my job applications"}
                status={status}
                handleStatus={handleStatus}
                FilterComponents={
                    <FilterDropdown
                        id={"stage-filter"}
                        label={"stage"}
                        value={stage}
                        options={APP_STAGE_COLORS}
                        handleOption={handleStage}
                    />
                }
            >
                Every job from <i>interviewing to interested.</i>
            </HeaderLayout>
            <CardList
                type={"jobs"}
                cards={cards}
                status={status}
                isPreview={false}
                isShow={true}
            />
        </PageLayout>
    )
}

export default withStatusControl(JobBoard)