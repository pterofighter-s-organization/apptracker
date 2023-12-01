import { useContext, useEffect, useMemo } from "react"

//components
import { CardList } from "../../../../components/CardList"
import { CreateButton } from "../../../../components/Buttons/CreateButton"
import { SectionHeader } from "../../../../components/SectionHeader"
import { FilterDropdown } from "../../../../components/Dropdowns/FilterDropdown"
import { showSubmitNotification } from "../../../../components/NotificationList/components/Notification/Notification"
import { ErrorDisplay } from "../../../../components/Displays/ErrorDisplay"

//helpers
import { filterDataByStatus } from "../../../../helpers/helpers"

//hocs
import { withStatusControl } from "../../../../hocs/withStatusControl"

//constants
import { APP_STATUS_COLORS } from "../../../../constants/constants"

//contexts
import { JobContext } from "../../../../hooks/contexts/JobContext"
import { NotesContext } from "../../../../hooks/contexts/NotesContext"

//css
import "./JobPageNotes.css"
import "../../JobPage.css"

function JobPageNotes({ status, handleStatus }) {

    const { job } = useContext(JobContext)
    const { notes, getJobNotes, createJobNote } = useContext(NotesContext)

    useEffect(() => {
        getJobNotes(job.data.application_id)
    }, [getJobNotes, job.data.application_id])

    const filteredData = useMemo(() => {
        return filterDataByStatus(status, notes.data)
    }, [status, notes.data])

    const handleCreate = (e) => {
        e.preventDefault()
        
        createJobNote(job.data.application_id, {
            position: job.data.position,
            note: ""
        }).then((result) => {
            showSubmitNotification({
                status: result.success,
                errors: result.errors,
                message: "Note created successfully!"
            })
        })
    }

    if (notes.loading) {
        return <>Loading...</>
    }

    if (notes.errors) {
        return (
            <ErrorDisplay
                label={"job notes"}
                errors={notes.errors}
                isSection={true}
            />
        )
    }

    return (
        <>
            <SectionHeader
                IconComponent={<i className="bi bi-stickies-fill" />}
                title={`${filteredData.length} notes taken`}
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
                cards={filteredData}
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