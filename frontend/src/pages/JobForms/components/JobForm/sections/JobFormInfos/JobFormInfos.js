
//components
import { TextInput } from "../../../../../../components/Inputs/TextInput"
import { TextareaInput } from "../../../../../../components/Inputs/TextareaInput"
import { SelectionInput } from "../../../../../../components/Inputs/SelectionInput"
import { InfoReminder } from "../../../../../../components/InfoReminder"

//css
import "./JobFormInfos.css"
import "../../JobForm.css"

export default function JobFormInfos({ formData, handleChange }) {

    return (
        <div className="job-form-section">
            <h4 className="job-form-title">
                job information
            </h4>
            <hr />
            <InfoReminder
                text={"* is required"}
            />
            <div className="job-form-split">
                <div className="job-form-split-section job-form-info">
                    <TextInput
                        width={"500px"}
                        name={"job"}
                        formDataObj={formData.job}
                        handleChange={handleChange}
                        header={"job name"}
                        footer={"the name of the job."}
                        isRequired={true}
                    />
                    <TextInput
                        width={"500px"}
                        name={"company"}
                        formDataObj={formData.company}
                        handleChange={handleChange}
                        header={"company name"}
                        footer={"the name of the company."}
                        isRequired={true}
                    />
                    <div className="job-form-paid">
                        <TextInput
                            width={"250px"}
                            name={"paid"}
                            formDataObj={formData.paid}
                            handleChange={handleChange}
                            header={"paid"}
                            footer={"what's the paid?"}
                            isRequired={true}
                        />
                        <SelectionInput
                            name={"rate"}
                            options={
                                ["hour", "year"]
                            }
                            formDataObj={formData.rate}
                            handleChange={handleChange}
                            header={"rate"}
                            footer={"wage or salary?"}
                            isRequired={false}
                        />
                    </div>
                </div>
                <div className="job-form-split-section job-form-links">
                    <TextInput
                        width={"1000px"}
                        name={"relatedSite"}
                        formDataObj={formData.relatedSite}
                        handleChange={handleChange}
                        header={"related site"}
                        footer={"where you founded?"}
                        isRequired={false}
                    />
                    <TextInput
                        width={"1000px"}
                        name={"resumeLink"}
                        formDataObj={formData.resumeLink}
                        handleChange={handleChange}
                        header={"resume link"}
                        footer={"your resume doc link."}
                        isRequired={false}
                    />
                    <TextInput
                        width={"1000px"}
                        name={"coverLetterLink"}
                        formDataObj={formData.coverLetterLink}
                        handleChange={handleChange}
                        header={"cover letter link"}
                        footer={"your cover letter doc link."}
                        isRequired={false}
                    />
                </div>
            </div>
            <div />
            <TextareaInput
                height={"20rem"}
                name={"description"}
                formDataObj={formData.description}
                handleChange={handleChange}
                header={"job description"}
                footer={"save job description here."}
            />
        </div>
    )
}