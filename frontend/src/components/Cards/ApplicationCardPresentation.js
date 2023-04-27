import { Link } from "react-router-dom";
import StatusButtonContainer from "../StatusButton/StatusButtonContainer";
import DateDisplayPresentation from "../TimeDisplay/DateDisplayPresentation";

export default function ApplicationCardPresentation({ displayData, newStatus }) {

    //present the following
    //1. (status, time diff)
    //2. (color)
    //3. (position, <tab>, company, <tab>, salary)
    //4. (buttons to change status) - a function to change status
    //5. (the button to the app)

    return (
        <div className="border border-0 card bg-light shadow p-0" style={{ width: "300px" }}>
            {/* <div className="card-header bg-success" /> */}
            <div className="border border-0 card-header p-4 d-flex flex-wrap gap-3">
                <StatusButtonContainer
                    color={displayData.color}
                    appStatus={displayData.status}
                    newStatus={newStatus}
                />
            </div>
            <div className="card-body p-4 d-flex flex-column gap-2">
                <div className="card-title h5">
                    {displayData.position}
                </div>
                <div className="card-subtitle lead">
                    - {displayData.company}
                </div>
            </div>

            <Link to={displayData.link} className="card-text btn btn-primary p-2 m-4 mt-0">
                <div className="">
                    More Details
                </div>
            </Link>

            <div className="border border-0 card-footer text-body-secondary p-4">
                Updated: <DateDisplayPresentation date={displayData.dateEdited}/>
            </div>
        </div>
    )
}