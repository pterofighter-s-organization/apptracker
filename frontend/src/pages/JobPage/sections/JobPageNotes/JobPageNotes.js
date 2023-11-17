
//components
import { CardList } from "../../../../components/CardList"
import { CreateButton } from "../../../../components/Buttons/CreateButton"
import { SectionHeader } from "../../../../components/SectionHeader"
import { FilterDropdown } from "../../../../components/Dropdowns/FilterDropdown"

//hocs
import { withStatusControl } from "../../../../hocs/withStatusControl"

//constants
import { APP_STATUS_COLORS } from "../../../../constants/constants"

//css
import "./JobPageNotes.css"
import "../../JobPage.css"

function JobPageNotes({ status, handleStatus }) {

    const noteCards = Array.from({ length: 0 }).fill({
        value: "",
        status: status
    })

    const handleCreate = (e) => {
        e.preventDefault()
        // setNotes([...notes, notes.length])
    }

    //here going to fetch notes

    return (
        <>
            <SectionHeader
                IconComponent={<i className="bi bi-stickies-fill" />}
                title={`${noteCards.length} notes taken`}
                ButtonComponent={
                    <FilterDropdown
                        id={"status-filter-notes"}
                        label={"status"}
                        value={status}
                        options={APP_STATUS_COLORS}
                        handleOption={handleStatus}
                    />
                }
            />
            <CardList
                type={"notes"}
                cards={noteCards}
                isPreview={true}
                isShow={true}
            />
            <CreateButton
                handleCreate={handleCreate}
                label={"note"}
            />
        </>
    )
}

export default withStatusControl(JobPageNotes)