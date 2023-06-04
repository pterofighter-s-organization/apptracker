//components
import CompanyName from "./components/CompanyName";
import JobPosition from "./components/JobPosition";
import SalaryRange from "./components/SalaryRange";

export default function NamesInfo({ position, company, salary }) {

    return (
        <div className="d-flex flex-column gap-3 gap-md-4 gap-xl-4 bg-body-secondary p-4 w-100">
            <JobPosition
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