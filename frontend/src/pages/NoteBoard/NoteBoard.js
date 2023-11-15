
//components
import { CardList } from "../../components/CardList";

//layouts
import { HeaderLayout } from "../../layouts/HeaderLayout";
import { PageLayout } from "../../layouts/PageLayout";

//hocs
import withStatusControl from "../../hocs/withStatusControl";

//css
import "./NoteBoard.css"

function NoteBoard({ status, handleStatus }) {

    const cards = Array.from({ length: 15 }, (_, index) => index + 1)

    return (
        <PageLayout>
            <HeaderLayout
                title={"my job notes"}
                status={status}
                handleStatus={handleStatus}
            >
                Shows all the notes you've created for each job applications.
            </HeaderLayout>
            <CardList
                type={"notes"}
                cards={cards}
                status={status}
                isPreview={false}
                isShow={true}
            />
        </PageLayout>
    )
}

export default withStatusControl(NoteBoard)