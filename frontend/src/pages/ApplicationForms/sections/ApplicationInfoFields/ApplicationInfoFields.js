
//components
import { FormFieldFooter } from "../../../../components/FormFieldFooter";
import { FormFieldHeader } from "../../../../components/FormFieldHeader";
import { TextInput, UrlInput, TextAreaInput } from "../../../../components/Inputs";

//layouts
import { SubSectionLayout } from "../../../../layouts/SubSectionLayout";

//helpers
import * as formHelpers from "../../../../helpers/formHelpers";

export default function ApplicationInfoFields({ formData, setFormData, errorMsgs }) {

    return (
        <div className="d-flex flex-column gap-3 gap-md-4">

            <div className="d-flex flex-column flex-xl-row gap-3 gap-md-4 align-items-stretch">

                <SubSectionLayout title={"Basic infos :"} titleFontSize={"fs-5"}>
                    <div className="d-flex flex-column gap-3">
                        <FormFieldHeader header={"Position name"} isRequired={true} />
                        <TextInput
                            value={formData["position"]}
                            updateValue={formHelpers.setInputData(setFormData, "position")}
                            label={"position"}
                        />
                        <FormFieldFooter
                            footer={"Ex. (Software engineer, Web engineer, etc..)"}
                            errorMessage={errorMsgs["position"]}
                            isError={errorMsgs["position"].length > 0}
                        />
                    </div>

                    <div className="d-flex flex-column gap-3">
                        <FormFieldHeader header={"Company name"} isRequired={true} />
                        <TextInput
                            value={formData["company"]}
                            updateValue={formHelpers.setInputData(setFormData, "company")}
                            label={"company"}
                        />
                        <FormFieldFooter
                            footer={"Ex. (Google, Amazon, Microsoft, etc..)"}
                            errorMessage={errorMsgs["company"]}
                            isError={errorMsgs["company"].length > 0}
                        />
                    </div>

                    <div className="d-flex flex-column gap-3" style={{ minWidth: "300px", width: "300px", maxWidth: "100vw" }}>
                        <FormFieldHeader header={"Salary range"} isRequired={true} />
                        <TextInput
                            value={formData["salary"]}
                            updateValue={formHelpers.setInputData(setFormData, "salary")}
                            label={"salary"}
                        />
                        <FormFieldFooter
                            footer={"Ex. (90k-100k)"}
                            errorMessage={errorMsgs["salary"]}
                            isError={errorMsgs["salary"].length > 0}
                        />
                    </div>
                </SubSectionLayout>

                <SubSectionLayout title={"Link infos :"} titleFontSize={"fs-5"}>
                    <div className="d-flex flex-column gap-3">
                        <FormFieldHeader header={"Application link"} isRequired={false} />
                        <UrlInput
                            value={formData["application_link"]}
                            updateValue={formHelpers.setInputData(setFormData, "application_link")}
                        />
                        <FormFieldFooter
                            footer={"Link to where you found this application"}
                            errorMessage={errorMsgs["application_link"]}
                            isError={errorMsgs["application_link"].length > 0}
                        />
                    </div>

                    <div className="d-flex flex-column gap-3">
                        <FormFieldHeader header={"Resume doc link"} isRequired={false} />
                        <UrlInput
                            value={formData["resume_link"]}
                            updateValue={formHelpers.setInputData(setFormData, "resume_link")}
                        />
                        <FormFieldFooter
                            footer={"Link to a doc Ex. (Share google doc link)"}
                            errorMessage={errorMsgs["resume_link"]}
                            isError={errorMsgs["resume_link"].length > 0}
                        />
                    </div>

                    <div className="d-flex flex-column gap-3">
                        <FormFieldHeader header={"Cover letter doc link"} isRequired={false} />
                        <UrlInput
                            value={formData["cover_letter_link"]}
                            updateValue={formHelpers.setInputData(setFormData, "cover_letter_link")}
                        />
                        <FormFieldFooter
                            footer={"Link to a doc Ex. (Share google doc link)"}
                            errorMessage={errorMsgs["cover_letter_link"]}
                            isError={errorMsgs["cover_letter_link"].length > 0}
                        />
                    </div>
                </SubSectionLayout>
            </div>

            <SubSectionLayout title={"Description :"} titleFontSize={"fs-5"}>
                {/* now the parent can control the height as the parent is d-flex and child is flex-grow-1 = taking all the space possible while leaving others the space they needed */}
                <div className="d-flex bg-light rounded-2" style={{ minHeight: "300px", height: "25vh" }}>
                    <TextAreaInput
                        value={formData["description"]}
                        updateValue={formHelpers.setInputData(setFormData, "description")}
                    />
                </div>
                <FormFieldFooter
                    footer={"Description of the job you're tracking for"}
                    errorMessage={errorMsgs["description"]}
                    isError={errorMsgs["description"].length > 0}
                />
            </SubSectionLayout>
        </div>
    )
}