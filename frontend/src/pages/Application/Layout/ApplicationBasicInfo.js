//components
import DateAndTime from '../../../components/Date/DateAndTime';
import StatusButton from '../../../components/StatusButton/StatusButton';

export default function ApplicationBasicInfo({ displayData, updateNewStatus, status }) {

    const showAppliedDate = status !== "interested"

    return (
        <div className="d-flex flex-wrap gap-3 gap-md-4 gap-xl-5 align-items-center bg-body-secondary p-4">
            <div className="d-flex flex-row gap-3 align-items-center">
                <div className="fs-3">
                    Status :
                </div>
                <div className="mt-xl-1">
                    <StatusButton
                        appStatus={displayData.status}
                        newStatus={updateNewStatus}
                        textClass={"fs-6"}
                    />
                </div>
            </div>
            <div className="d-flex flex-row gap-3 fs-3">
                <div className="">
                    Updated :
                </div>
                <div className="text-dark-emphasis">
                    <DateAndTime date={displayData.dateEdited} />
                </div>
            </div>
            <div className="d-flex flex-row gap-3 fs-3">
                <div className="">
                    Created :
                </div>
                <div className="text-dark-emphasis">
                    <DateAndTime date={displayData.dateCreated} />
                </div>
            </div>
            {showAppliedDate ?
                <div className="d-flex flex-row gap-3 fs-3">
                    <div className="">
                        Applied :
                    </div>
                    <div className="text-dark-emphasis">
                        <DateAndTime date={displayData.dateApplied} />
                    </div>
                </div>
                :
                <></>
            }
        </div>
    )
}