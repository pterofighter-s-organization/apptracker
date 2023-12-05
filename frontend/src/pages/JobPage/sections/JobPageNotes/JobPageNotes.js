import { useContext, useMemo, useEffect, useState } from "react";

//components
import { CardList } from "../../../../components/CardList";
import { CardsHeader } from "../../../../components/CardsHeader";
import { ErrorDisplay } from "../../../../components/Displays/ErrorDisplay";
import { LoadingDisplay } from "../../../../components/Displays/LoadingDisplay";
import { showSubmitNotification } from "../../../../components/NotificationList/components/Notification/Notification";
import { FilterDropdown } from "../../../../components/Dropdowns/FilterDropdown";

//private-components
import { NoteForm } from "../../components/NoteForm";

//layouts
import { CardsHeaderLayout } from "../../../../layouts/CardsLayout/CardsHeaderLayout";
import { CardsSectionLayout } from "../../../../layouts/CardsLayout/CardsSectionLayout";

//helpers
import { filterDataByStatus } from "../../../../helpers/helpers";

//hocs
import { withStatusControl } from "../../../../hocs/withStatusControl";

//constants
import { APP_STATUS_COLORS } from "../../../../constants/constants";

//contexts
import { NotesContext } from "../../../../hooks/contexts/NotesContext";
import { JobContext } from "../../../../hooks/contexts/JobContext";


function JobPageNotes({ status, handleStatus, isPreview, isShow }) {

    const { job } = useContext(JobContext)
    const { notes, getJobNotes, createJobNote } = useContext(NotesContext)
    const [formData, setFormData] = useState({
        note: {
            value: "",
            error: ""
        }
    })

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
            note: formData.note.value
        }).then((result) => {
            showSubmitNotification({
                status: result.success,
                errors: result.errors,
                message: "Note created successfully!"
            })
        })
    }

    const handleChange = (e) => {
        e.preventDefault()

        setFormData({
            ...formData,
            [e.target.name]: {
                value: e.target.value,
                error: ""
            }
        })
    }

    if (notes.loading) {
        return (
            <LoadingDisplay />
        )
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
        <CardsSectionLayout isPreview={isPreview}>
            <CardsHeaderLayout>
                <CardsHeader
                    icon={<i className="bi bi-stickies-fill" />}
                    quantity={filteredData.length}
                    type={"note"}
                    header={status === "archived" ? "to peel off" : "to record"}
                />
                <FilterDropdown
                    id={"job-notes-status-filter"}
                    label={"status"}
                    value={status}
                    options={APP_STATUS_COLORS}
                    handleOption={handleStatus}
                />
            </CardsHeaderLayout>
            <NoteForm
                formData={formData}
                handleChange={handleChange}
                handleCreate={handleCreate}
            />
            <CardList
                type={"notes"}
                cards={filteredData}
                isPreview={isPreview}
                isShow={isShow}
                isDashboard={true}
            />
        </CardsSectionLayout>
    )
}

export default withStatusControl(JobPageNotes)





