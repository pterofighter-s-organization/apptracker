import { Link } from "react-router-dom";

//css
import "./ApplicationCard.css"

//utils
import { textFormat } from "../../utils/text.js";

//components
import StatusButton from "../StatusButton/StatusButton.js";
import DateAndTime from "../Date/DateAndTime.js";

export default function ApplicationCardPresentation ({ displayData, newStatus }) {

    //never call this file other than appcard itself, a helper file for application card that defines the layout

    //present the following
    //1. (status, time diff)
    //2. (color)
    //3. (position, <tab>, company, <tab>, salary)
    //4. (buttons to change status) - a function to change status
    //5. (the button to the app)

    //layout of the card
    return (
        <div className="card border border-0 rounded-0 bg-body-secondary bg-opacity-75">
            {/* <div className="card-header bg-success" /> */}
            <div className="card-header p-4 d-flex flex-wrap gap-3 border border-0">
                <StatusButton
                    key={displayData.id}
                    appStatus={displayData.status}
                    newStatus={newStatus}
                />
            </div>

            <div className="card-body p-4 d-flex flex-column gap-2">
                {/* avoid the title overflowing */}
                <div className="card-title h5 text-truncate">
                    {textFormat(displayData.position)}
                </div>
                <div className="card-subtitle lead">
                    - {textFormat(displayData.company)}
                </div>
            </div>

            <Link to={"/application/"+displayData.id} className="card-text btn btn-primary p-2 m-4 mt-0">
                More Details
            </Link>

            <div className="border border-0 card-footer text-body-secondary p-4">
                Updated: <DateAndTime date={displayData.dateEdited}/>
            </div>
        </div>
    )
}