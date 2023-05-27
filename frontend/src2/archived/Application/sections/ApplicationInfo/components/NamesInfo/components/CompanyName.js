//utils
import { textFormat } from "../../../../../../../utils/text"

export default function CompanyName({ company }) {

    return (
        <div className="d-flex flex-row gap-3">
            <div className="">
                Company name :
            </div>
            <div className="text-dark-emphasis">
                {textFormat(company)}
            </div>
        </div>
    )
}