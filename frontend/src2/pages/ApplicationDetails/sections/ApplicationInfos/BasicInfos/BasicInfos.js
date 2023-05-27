//utils
import { textFormat } from "../../../../../utils/text"

export default function BasicInfos(props) {

    const {
        position,
        company,
        salary
    } = props

    return (
        <div className="d-flex flex-column gap-3 gap-md-4 bg-body-secondary p-4 w-100">

            <div className="d-flex flex-row gap-3">
                <div className="">
                    Position :
                </div>
                <div className="text-dark-emphasis">
                    {textFormat(position)}
                </div>
            </div>

            <div className="d-flex flex-row gap-3">
                <div className="">
                    Company :
                </div>
                <div className="text-dark-emphasis">
                    {textFormat(company)}
                </div>
            </div>

            <div className="d-flex flex-row gap-3">
                <div className="">
                    Salary :
                </div>
                <div className="text-dark-emphasis">
                    {textFormat(salary)}
                </div>
            </div>

        </div>
    )
}