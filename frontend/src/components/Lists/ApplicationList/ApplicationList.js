

//components
import { ApplicationCard } from "./ApplicationCard"

//css
import "./ApplicationList.css"

export default function ApplicationList({ }) {

    return (
        <div className="application-list">
            {
                Array.from({ length: 32 }, () => 0).map((id) => (
                    <ApplicationCard key={id} test={true} />
                ))
            }
            <ApplicationCard test={false} />
        </div>
    )
}