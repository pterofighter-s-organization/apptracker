
//layout
import { HeaderLayout } from "../../layouts/HeaderLayout"
import { PageLayout } from "../../layouts/PageLayout"

export default function Dashboard() {

    return (
        <PageLayout>
            <HeaderLayout title={"my dashboard"}>
                Welcome, <i>User 1</i>
            </HeaderLayout>
        </PageLayout>
    )
}