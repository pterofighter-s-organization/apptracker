import { useEffect, useContext, useMemo } from "react"

//components
import { SectionHeader } from "../../../../components/SectionHeader"
import { CardList } from "../../../../components/CardList"
import { RedirectButton } from "../../../../components/Buttons/RedirectButton"

//helpers
import { handleAPIErrors } from "../../../../helpers/formHelpers"
import { filterDataByStatus } from "../../../../helpers/helpers"

//contexts
import { NotesContext } from "../../../../hooks/contexts/NotesContext"

//css

export default function DashboardNotes({ status, isPreview, isShow }) {

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
            <div>
                Notes {
                    handleAPIErrors({
                        errors: notes.errors
                    })
                }...
            </div>
        )
    }

    return (
        <>
            <SectionHeader
                IconComponent={<i className="bi bi-stickies-fill" />}
                title={`${filteredData.length} notes ${status === "archived" ? "to restore" : "taken"}`}
                ButtonComponent={
                    <RedirectButton
                        link={"/all-notes/" + status}
                        label={`all notes`}
                    />
                }
            />
            <CardList
                type={"notes"}
                cards={filteredData}
                isPreview={isPreview}
                isShow={isShow}
            />
        </>
    )
}



