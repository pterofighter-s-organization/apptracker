import { useContext, useEffect, useMemo } from "react";

//components
import { CardList } from "../../components/CardList";

//layouts
import { HeaderLayout } from "../../layouts/HeaderLayout";
import { PageLayout } from "../../layouts/PageLayout";

//helpers
import { filterDataByStatus } from "../../helpers/helpers";
import { handleAPIErrors } from "../../helpers/formHelpers";

//hocs
import { withStatusControl } from "../../hocs/withStatusControl";

//contexts
import { NotesContext } from "../../hooks/contexts/NotesContext";

//css
import "./NoteBoard.css"
import { ErrorDisplay } from "../../components/ErrorDisplay";

function NoteBoard({ status, handleStatus }) {

    const { notes, getNotes } = useContext(NotesContext)

    useEffect(() => {
        getNotes()
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
                label={"Notes"}
                errors={notes.errors}
            />
        )
    }

    return (
        <PageLayout>
            <HeaderLayout
                title={"my job notes"}
                text={
                    <>
                        Shows all the notes you've created for each job applications.
                    </>
                }
                status={status}
                handleStatus={handleStatus}
            />
            <CardList
                type={"notes"}
                cards={filteredData}
                isPreview={false}
                isShow={true}
            />
        </PageLayout>
    )
}

export default withStatusControl(NoteBoard)