import { useContext, useMemo, useEffect, useState } from "react";

//components
import { CardList } from "../../../../components/CardList";
import { CardListHeader } from "../../../../components/CardListHeader";
import { ErrorDisplay } from "../../../../components/Displays/ErrorDisplay";
import { LoadingDisplay } from "../../../../components/Displays/LoadingDisplay";
import { showSubmitNotification } from "../../../../components/NotificationList/components/Notification/Notification";
import { FilterDropdown } from "../../../../components/Dropdowns/FilterDropdown";

//private-components
import { NoteForm } from "../../components/NoteForm";

//layouts
import { CardsSectionLayout } from "../../../../layouts/CardsSectionLayout";

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
        return filterDataByStatus(job.data.archived ? "archived" : status, notes.data)
    }, [status, notes.data, job.data.archived])

    const filteredStatusOptions = useMemo(() => {
        const filteredOptions = { ...APP_STATUS_COLORS }
        console.log(job.data.archived, filteredOptions)
        if (job.data.archived) {
            delete filteredOptions.active
            return filteredOptions
        } else {
            return filteredOptions
        }
    }, [job.data.archived])

    const handleCreate = (e) => {
        e.preventDefault()

        createJobNote(job.data.application_id, {
            position: job.data.position,
            note: formData.note.value,
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

    if (notes.loading || notes.submitLoading) {
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

    console.log(filteredStatusOptions)

    return (
        <CardsSectionLayout isPreview={isPreview}>
            <CardListHeader
                isArchived={job.data.archived ? true : status === "archived"}
                quantity={filteredData.length}
                type={"note"}
            />
            <FilterDropdown
                id={"job-notes-status-filter"}
                label={"status"}
                value={job.data.archived ? "archived" : status}
                options={filteredStatusOptions}
                handleOption={handleStatus}
            />
            {
                !job.data.archived ?
                    <NoteForm
                        formData={formData}
                        handleChange={handleChange}
                        handleCreate={handleCreate}
                    />
                    :
                    null
            }
            <CardList
                type={"notes"}
                cards={filteredData}
                isPreview={isPreview}
                isShow={isShow}
            />
        </CardsSectionLayout>
    )
}

export default withStatusControl(JobPageNotes)





