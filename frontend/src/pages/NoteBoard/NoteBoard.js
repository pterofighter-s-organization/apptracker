
//components
import { NoteCard } from "../../components/Cards/NoteCard";
import { CardList } from "../../components/CardList";

//layouts
import { HeaderLayout } from "../../layouts/HeaderLayout";
import { PageLayout } from "../../layouts/PageLayout";

//hocs
import withStatusControl from "../../hoc/withStatusControl";

//css
import "./NoteBoard.css"

function NoteBoard({ status, handleStatus }) {

    const cards = Array.from({ length: 15 }, (_, index) => index + 1)

    return (
        <PageLayout>
            <HeaderLayout
                title={"all job notes"}
                status={status}
                handleStatus={handleStatus}
            >
                Shows all the notes you've created for each job applications.
            </HeaderLayout>
            <CardList
                type={"notes"}
                cards={cards}
                CardComponent={NoteCard}
                isPreview={false}
                isRedirect={false}
                status={status}
            />
        </PageLayout>
    )
}

export default withStatusControl(NoteBoard)