
//components
import { NoteList } from "../../components/Lists/NoteList";

//layouts
import { HeaderLayout } from "../../layouts/HeaderLayout";
import { PageLayout } from "../../layouts/PageLayout";

//css
import "./NoteBoard.css"

export default function NoteBoard() {

    return (
        <PageLayout>
            <HeaderLayout title={"all job notes"}>
                Shows all the notes you've created for each job applications.
            </HeaderLayout>
            <NoteList/>
        </PageLayout>
    )
}