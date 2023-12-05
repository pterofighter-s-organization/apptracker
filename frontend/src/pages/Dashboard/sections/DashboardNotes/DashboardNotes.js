import { useContext, useEffect, useMemo } from "react";

//hocs
import { withStatusControl } from "../../../../hocs/withStatusControl";

//layouts
import { CardsSectionLayout } from "../../../../layouts/CardsLayout/CardsSectionLayout";
import { CardsHeaderLayout } from "../../../../layouts/CardsLayout/CardsHeaderLayout";

//contexts
import { NotesContext } from "../../../../hooks/contexts/NotesContext";

//components
import { CardsHeader } from "../../../../components/CardsHeader";
import { LoadingDisplay } from "../../../../components/Displays/LoadingDisplay";
import { ErrorDisplay } from "../../../../components/Displays/ErrorDisplay";
import { FilterDropdown } from "../../../../components/Dropdowns/FilterDropdown";
import { CardList } from "../../../../components/CardList";
import { RedirectButton } from "../../../../components/Buttons/RedirectButton";

//helpers
import { filterDataByStatus } from "../../../../helpers/helpers";

//constants
import { APP_STATUS_COLORS } from "../../../../constants/constants";

function DashboardNotes({ status, handleStatus, isPreview, isShow }) {

    const { notes, getNotes } = useContext(NotesContext)

    useEffect(() => {
        getNotes()
    }, [getNotes])

    const filteredData = useMemo(() => {
        return filterDataByStatus(status, notes.data)
    }, [status, notes.data])

    if (notes.loading) {
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
            <CardsHeaderLayout>
                <CardsHeader
                    icon={<i className="bi bi-stickies-fill" />}
                    quantity={filteredData.length}
                    type={"note"}
                    header={status === "archived" ? "to peel off" : "to record"}
                />
                <FilterDropdown 
                    id={"notes-status-filter"}
                    label={"status"}
                    value={status}
                    options={APP_STATUS_COLORS}
                    handleOption={handleStatus}
                />
            </CardsHeaderLayout>
            <CardList
                type={"notes"}
                cards={filteredData}
                isPreview={isPreview}
                isShow={isShow}
                isDashboard={true}
            />
            <RedirectButton
                link={`/all-notes/${status}`}
                label={"link to all notes"}
            />
        </CardsSectionLayout>
    )
}

export default withStatusControl(DashboardNotes)