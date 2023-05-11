//utils
import { textFormat } from "../../../../../../utils/text"

export default function JobTitle({ position }) {

    return (
        <div className="d-flex flex-row gap-3">
            <div className="">
                Job title :
            </div>
            <div className="text-dark-emphasis">
                {textFormat(position)}
            </div>
        </div>
    )
}