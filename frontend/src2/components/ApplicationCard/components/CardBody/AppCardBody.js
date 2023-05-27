//utils
import { textFormat } from "../../../../utils/text.js";

export default function AppCardBody({ position, company }) {

    return (
        <div className="card-body p-4 d-flex flex-column gap-2">
            {/* avoid the title overflowing */}
            <div className="card-title h5 text-truncate">
                {textFormat(position)}
            </div>
            <div className="card-subtitle lead">
                - {textFormat(company)}
            </div>
        </div>
    )
}