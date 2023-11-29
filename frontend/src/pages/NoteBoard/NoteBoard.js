
//components
import { CardList } from "../../components/CardList";

//layouts
import { HeaderLayout } from "../../layouts/HeaderLayout";
import { PageLayout } from "../../layouts/PageLayout";

//hocs
import { withStatusControl } from "../../hocs/withStatusControl";

//css
import "./NoteBoard.css"

function NoteBoard({ status, handleStatus }) {

    const cards = Array.from({ length: 15 }).fill({
        value: "",
        status: status
    })

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
                cards={cards}
                isPreview={false}
                isShow={true}
            />
        </PageLayout>
    )
}

export default withStatusControl(NoteBoard)