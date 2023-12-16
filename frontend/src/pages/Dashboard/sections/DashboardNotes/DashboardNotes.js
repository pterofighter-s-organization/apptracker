import { useContext, useEffect, useMemo } from "react";

//hocs
import { withStatusControl } from "../../../../hocs/withStatusControl";

//layouts
import { CardsSectionLayout } from "../../../../layouts/CardsSectionLayout";

//contexts
import { NotesContext } from "../../../../hooks/contexts/NotesContext";

//components
import { CardListHeader } from "../../../../components/CardListHeader";
import { LoadingDisplay } from "../../../../components/Displays/LoadingDisplay";
import { ErrorDisplay } from "../../../../components/Displays/ErrorDisplay";
import { FilterDropdown } from "../../../../components/Dropdowns/FilterDropdown";
import { CardList } from "../../../../components/CardList";
import { RedirectButton } from "../../../../components/Buttons/RedirectButton";

//helpers
import { filterDataByStatus } from "../../../../helpers/helpers";

//constants
import { APP_STATUS_COLORS } from "../../../../constants/constants";

function DashboardNotes({ loading, status, handleStatus, isPreview, isShow }) {

    const { notes, getNotes } = useContext(NotesContext)

    useEffect(() => {
        getNotes()
    }, [getNotes, loading])

    const filteredData = useMemo(() => {
        return filterDataByStatus(status, notes.data)
    }, [status, notes.data])

    if (notes.loading || notes.submitLoading || loading) {
        return (
            <LoadingDisplay />
        )
    }

    if (notes.errors) {
        return (
            <ErrorDisplay
                label={"notes"}
                errors={notes.errors}
                isSection={true}
            />
        )
    }

    return (
        <CardsSectionLayout isPreview={isPreview}>
            <CardListHeader
                isArchived={status === "archived"}
                quantity={filteredData.length}
                type={"note"}
            />
            <FilterDropdown
                id={"notes-status-filter"}
                label={"status"}
                value={status}
                options={APP_STATUS_COLORS}
                handleOption={handleStatus}
            />
            <CardList
                type={"notes"}
                cards={filteredData}
                isPreview={isPreview}
                isShow={isShow}
            />
            <RedirectButton
                link={`/all-notes/${status}`}
                label={"link to all notes"}
            />
        </CardsSectionLayout>
    )
}

export default withStatusControl(DashboardNotes)