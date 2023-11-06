

//components
import { ApplicationCard } from "./ApplicationCard"

//css
import "./ApplicationList.css"

export default function ApplicationList({ }) {

    return (
        <div className="application-list">
            {
                Array.from({ length: 10 }, (_, index) => index + 1).map((id) => (
                    <ApplicationCard key={id} id={id} />
                ))
            }
        </div>
    )
}