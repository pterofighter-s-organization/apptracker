//components
import StatusButton from "../../../StatusButton/StatusButton.js";

export default function AppCardHeader({ status, setStatus }) {

    return (
        <div className="card-header p-4 d-flex flex-wrap gap-3 border border-0">
            <StatusButton
                status={status}
                setStatus={setStatus}
            />
        </div>
    )
}