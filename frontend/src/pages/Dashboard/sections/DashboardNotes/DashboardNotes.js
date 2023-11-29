
//components
import { SectionHeader } from "../../../../components/SectionHeader"
import { CardList } from "../../../../components/CardList"
import { RedirectButton } from "../../../../components/Buttons/RedirectButton"

//helpers
// import { filterDataByStatus } from "../../../../helpers/helpers";

//css

export default function DashboardNotes({ status, isPreview, isShow }) {

    const noteCards = Array.from({ length: 35 }).fill({
        value: "",
        status: status,
    })

    return (
        <>
            <SectionHeader
                IconComponent={<i className="bi bi-stickies-fill" />}
                title={`${noteCards.length} notes ${status === "archived" ? "to restore" : "taken"}`}
                ButtonComponent={
                    <RedirectButton
                        link={"/all-notes/" + status}
                        label={`all notes`}
                    />
                }
            />
            <CardList
                type={"notes"}
                cards={noteCards}
                isPreview={isPreview}
                isShow={isShow}
            />
        </>
    )
}



