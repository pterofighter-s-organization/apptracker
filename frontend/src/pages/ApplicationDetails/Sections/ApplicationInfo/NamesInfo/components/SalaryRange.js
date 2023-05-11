//utils
import { textFormat } from "../../../../../../utils/text"

export default function SalaryRange({ salary }) {

    return (
        <div className="d-flex flex-row gap-3">
            <div className="">
                Salary range :
            </div>
            <div className="text-dark-emphasis">
                {textFormat(salary)}
            </div>
        </div>
    )
}