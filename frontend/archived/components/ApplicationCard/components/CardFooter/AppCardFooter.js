//components
import DateAndTime from "../../../Date/DateAndTime.js";

export default function AppCardFooter({ dateEdited }) {

    return (
        <div className="border border-0 card-footer text-body-secondary p-4">
            Updated: <DateAndTime date={dateEdited} />
        </div>
    )
}