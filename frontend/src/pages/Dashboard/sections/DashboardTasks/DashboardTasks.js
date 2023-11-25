
//components
import { SectionHeader } from "../../../../components/SectionHeader"
import { CardList } from "../../../../components/CardList"
import { RedirectButton } from "../../../../components/Buttons/RedirectButton"

//helpers
// import { filterDataByStatus } from "../../../../helpers/helpers";

//css

export default function DashboardTasks({ status, isPreview, isShow }) {

    const taskCards = Array.from({ length: 0 }).fill({
        value: "",
        status: status,
    })

    return (
        <>
            <SectionHeader
                IconComponent={<i className="bi bi-view-list" />}
                title={`${taskCards.length} tasks ${status === "archived" ? "to delete" : "coming up"}`}
                ButtonComponent={
                    <RedirectButton
                        link={"/all-tasks/" + status}
                        label={`all tasks`}
                    />
                }
            />
            <CardList
                type={"tasks"}
                cards={taskCards}
                isPreview={isPreview}
                isShow={isShow}
            />
        </>
    )
}