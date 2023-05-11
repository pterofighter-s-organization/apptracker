//parts
import CompanyName from "./Parts/CompanyName";
import JobTitle from "./Parts/JobTitle.js";
import SalaryRange from "./Parts/SalaryRange";

export default function NamesInfo({ position, company, salary }) {

    return (
        <div className="d-flex flex-column gap-3 gap-md-4 gap-xl-4 bg-body-secondary p-4 w-100 fs-4">
            <JobTitle
                position={position}
            />
            <CompanyName
                company={company}
            />
            <SalaryRange
                salary={salary}
            />
        </div>
    )
}