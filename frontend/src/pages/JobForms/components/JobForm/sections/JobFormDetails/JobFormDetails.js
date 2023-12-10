
//components
import { TextInput } from "../../../../../../components/Inputs/TextInput"
import { SelectionInput } from "../../../../../../components/Inputs/SelectionInput"
import { NumericInput } from "../../../../../../components/Inputs/NumericInput"
import { InfoReminder } from "../../../../../../components/InfoReminder"
import { InputHeader } from "../../../../../../components/Inputs/InputHeader"
import { InputFooter } from "../../../../../../components/Inputs/InputFooter"

//layouts
import { InputLayout } from "../../../../../../layouts/InputLayout"

//css
import "./JobFormDetails.css"
import "../styles/JobFormSections.css"

export default function JobFormDetails({ formData, handleChange }) {

    return (
        <div className="job-form-section job-form-details-container">
            <h3>
                Info and Links
            </h3>
            <InfoReminder
                text={"* is required."}
            />
            <div className="job-form-details">
                <div className="job-form-infos">
                    <InputLayout isError={formData.job.error.length > 0}>
                        <InputHeader
                            header={"Job name"}
                            isRequired={true}
                        />
                        <TextInput
                            name={"job"}
                            value={formData.job.value}
                            handleChange={handleChange}
                        />
                        <InputFooter
                            footer={"what's the job?"}
                            errorMessage={formData.job.error}
                        />
                    </InputLayout>
                    <InputLayout isError={formData.company.error.length > 0}>
                        <InputHeader
                            header={"Company name"}
                            isRequired={true}
                        />
                        <TextInput
                            name={"company"}
                            value={formData.company.value}
                            handleChange={handleChange}
                        />
                        <InputFooter
                            footer={"what's the company?"}
                            errorMessage={formData.company.error}
                        />
                    </InputLayout>
                    <div className="job-form-salary">
                        <InputLayout isError={formData.paid.error.length > 0}>
                            <InputHeader
                                header={"Paid"}
                                isRequired={true}
                            />
                            <NumericInput
                                name={"paid"}
                                value={formData.paid.value}
                                handleChange={handleChange}
                            />
                            <InputFooter
                                footer={"what's the paid?"}
                                errorMessage={formData.paid.error}
                            />
                        </InputLayout>
                        <InputLayout isError={formData.rate.error.length > 0}>
                            <InputHeader
                                header={"rate"}
                                isRequired={true}
                            />
                            <SelectionInput
                                id={"rate"}
                                name={"rate"}
                                options={["hr", "mo", "yr"]}
                                value={formData.rate.value}
                                handleChange={handleChange}
                            />
                            <InputFooter
                                footer={"what's the rate?"}
                                errorMessage={formData.rate.error}
                            />
                        </InputLayout>
                    </div>
                </div>
                <div className="job-form-links">
                    <InputLayout isError={formData.relatedSite.error.length > 0}>
                        <InputHeader
                            header={"Related site"}
                        />
                        <TextInput
                            name={"relatedSite"}
                            value={formData.relatedSite.value}
                            handleChange={handleChange}
                        />
                        <InputFooter
                            footer={"where you founded?"}
                            errorMessage={formData.relatedSite.error}
                        />
                    </InputLayout>
                    <InputLayout isError={formData.resumeLink.error.length > 0}>
                        <InputHeader
                            header={"Resume link"}
                        />
                        <TextInput
                            name={"resumeLink"}
                            value={formData.resumeLink.value}
                            handleChange={handleChange}
                        />
                        <InputFooter
                            footer={"your resume doc link."}
                            errorMessage={formData.resumeLink.error}
                        />
                    </InputLayout>
                    <InputLayout isError={formData.coverLetterLink.error.length > 0}>
                        <InputHeader
                            header={"Cover letter link"}
                        />
                        <TextInput
                            name={"coverLetterLink"}
                            value={formData.coverLetterLink.value}
                            handleChange={handleChange}
                        />
                        <InputFooter
                            footer={"your cover letter doc link."}
                            errorMessage={formData.coverLetterLink.error}
                        />
                    </InputLayout>
                </div>
            </div>
        </div>
    )
}