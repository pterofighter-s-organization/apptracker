//utils
import { textFormat } from "../../../utils/text"

export default function ApplicationAppInfo({ displayData }) {
    return (
        <div className="d-flex flex-column gap-3 gap-md-4 gap-xl-4 bg-body-secondary p-4 w-100 fs-4">
            <div className="d-flex flex-row gap-3">
                <div className="">
                    Job title :
                </div>
                <div className="text-dark-emphasis">
                    {textFormat(displayData.position)}
                </div>
            </div>
            <div className="d-flex flex-row gap-3">
                <div className="">
                    Company name :
                </div>
                <div className="text-dark-emphasis">
                    {textFormat(displayData.company)}
                </div>
            </div>
            <div className="d-flex flex-row gap-3">
                <div className="">
                    Salary range :
                </div>
                <div className="text-dark-emphasis">
                    {textFormat(displayData.salary)}
                </div>
            </div>
        </div>
    )
}