import { useContext, useEffect, useMemo } from "react";

//components
import { CardList } from "../../components/CardList";
import { ErrorDisplay } from "../../components/Displays/ErrorDisplay";
import { LoadingDisplay } from "../../components/Displays/LoadingDisplay";
import { ToggleButton } from "../../components/Buttons/ToggleButtons/ToggleButton";
import { CardListHeader } from "../../components/CardListHeader";

//layouts
import { HeaderLayout } from "../../layouts/HeaderLayout";
import { PageLayout } from "../../layouts/PageLayout";
import { CardsSectionLayout } from "../../layouts/CardsSectionLayout";

//helpers
import { filterDataByStatus } from "../../helpers/helpers";

//hocs
import { withStatusControl } from "../../hocs/withStatusControl";

//contexts
import { NotesContext } from "../../hooks/contexts/NotesContext";

//constants
import { APP_STATUS_COLORS } from "../../constants/constants";

function NoteBoard({ status, handleStatus }) {

    const { notes, getNotes } = useContext(NotesContext)

    useEffect(() => {
        getNotes().then((result) => {
            if (result.success) {
                document.title = `Note Board - Job Tracker App`
            }
        })

        return () => document.title = "Job Tracker App"
    }, [getNotes])

    const filteredData = useMemo(() => {
        return filterDataByStatus(status, notes.data)
    }, [notes.data, status])

    if (notes.loading) {
        return (
            <LoadingDisplay />
        )
    }

    if (notes.errors) {
        return (
            <ErrorDisplay
                label={"all notes"}
                errors={notes.errors}
            />
        )
    }

    return (
        <PageLayout>
            <HeaderLayout>
                <h1>All Notes</h1>
                <h6>Every note you created.</h6>
            </HeaderLayout>
            <CardsSectionLayout>
                <CardListHeader
                    isArchived={status === "archived"}
                    quantity={filteredData.length}
                    type={"note"}
                />
                <ToggleButton
                    value={status}
                    options={APP_STATUS_COLORS}
                    handleOption={handleStatus}
                />
                <CardList
                    type={"notes"}
                    cards={filteredData}
                    isPreview={false}
                    isShow={true}
                />
            </CardsSectionLayout>
        </PageLayout>
    )
}

export default withStatusControl(NoteBoard)