//components
import StatusButton from "../../../../../components/StatusButton/StatusButton"

export default function StatusChange({ status, setStatus }) {

    return (
        <div className="d-flex flex-row gap-3 align-items-center">
            <div className="">
                Status :
            </div>
            <div className="">
                <StatusButton
                    status={status}
                    setStatus={setStatus}
                    textClass={"fs-6"}
                />
            </div>
        </div>
    )
}