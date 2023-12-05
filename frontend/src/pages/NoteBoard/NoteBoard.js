import { useContext, useEffect, useMemo } from "react";

//components
import { CardList } from "../../components/CardList";
import { ErrorDisplay } from "../../components/Displays/ErrorDisplay";
import { FilterDropdown } from "../../components/Dropdowns/FilterDropdown";
import { CardsHeader } from "../../components/CardsHeader";

//layouts
import { HeaderLayout } from "../../layouts/HeaderLayout1";
import { PageLayout } from "../../layouts/PageLayout";
import { CardsSectionLayout } from "../../layouts/CardsLayout/CardsSectionLayout";
import { CardsHeaderLayout } from "../../layouts/CardsLayout/CardsHeaderLayout";

//helpers
import { filterDataByStatus } from "../../helpers/helpers";

//hocs
import { withStatusControl } from "../../hocs/withStatusControl";

//contexts
import { NotesContext } from "../../hooks/contexts/NotesContext";

//constants
import { APP_STATUS_COLORS } from "../../constants/constants";

//css
import "./NoteBoard.css"

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
        return <>Loading...</>
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
                    isPreview={false}
                    isShow={true}
                />
            </CardsSectionLayout>
        </PageLayout>
    )
}

export default withStatusControl(NoteBoard)