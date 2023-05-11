//components
import DateAndTime from "../../../../../components/Date/DateAndTime";

export default function AppliedDate({ dateApplied }) {

    const showDateApplied = dateApplied && dateApplied.length > 0

    return (
        <div className="d-flex flex-row gap-3">
            <div className="">
                Applied :
            </div>
            {showDateApplied ?
                <div className="text-dark-emphasis">
                    <DateAndTime date={dateApplied} />
                </div>
                :
                <div className="text-dark-emphasis">
                    Not specified
                </div>
            }
        </div>
    )
}