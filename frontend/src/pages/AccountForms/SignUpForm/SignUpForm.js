import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

//components
import { FormFieldHeader } from "../../../components/FormFieldHeader"
import { FormFieldFooter } from "../../../components/FormFieldFooter"
import { TextInput } from "../../../components/Inputs/TextInput"
import { ConfidentialInput } from "../../../components/Inputs/ConfidentialInput"

//helpers
import * as formHelpers from "../../../helpers/formHelpers"

export default function SignUpForm({ }) {

    const [formData, setFormData] = useState(null)

    const errorMsgs = {
        "username": "",
        "newPassword": "",
        "confirmedPassword": ""
    }

    useEffect(() => {
        const basicFormData = {
            "username": "",
            "newPassword": "",
            "confirmedPassword": ""
        }

        setFormData(basicFormData)
    }, [])

    if (!formData) {
        return <>Loading sign up form...</>
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center h-100">

            <div className="bg-secondary-subtle py-5 px-4 px-sm-5" style={{ width: "700px", maxWidth: "92.5vw" }}>

                <div className="d-flex flex-column gap-4">
                    <div className="d-flex flex-column text-center">
                        <div className="display-6" style={{ letterSpacing: "0.15vw" }}>
                            Get Started!
                        </div>
                        <div className="blockquote-footer fs-6 mt-3">
                            Create account to access all the features.
                        </div>
                    </div>
                    <div className="">
                        * ( required fields )
                    </div>
                    <div className="d-flex flex-column">
                        <div className="d-flex flex-column gap-3">
                            <FormFieldHeader header={"Set up a username"} isRequired={true} />
                            <TextInput
                                value={formData["username"]}
                                updateValue={formHelpers.setInputData(setFormData, "username")}
                                label={"username"}
                            />
                            <FormFieldFooter
                                footer={"Create your account username."}
                                errorMessage={errorMsgs["username"]}
                                isError={errorMsgs["username"].length > 0}
                            />
                        </div>
                        <div className="d-flex flex-column gap-3">
                            <FormFieldHeader header={"Set a new password"} isRequired={true} />
                            <ConfidentialInput
                                value={formData["newPassword"]}
                                updateValue={formHelpers.setInputData(setFormData, "newPassword")}
                                label={"new password"}
                            />
                            <FormFieldFooter
                                footer={"Enter your account password."}
                                errorMessage={errorMsgs["newPassword"]}
                                isError={errorMsgs["newPassword"].length > 0}
                            />
                        </div>
                        <div className="d-flex flex-column gap-3">
                            <FormFieldHeader header={"Confirm password"} isRequired={true} />
                            <ConfidentialInput
                                value={formData["confirmedPassword"]}
                                updateValue={formHelpers.setInputData(setFormData, "confirmedPassword")}
                                label={"to confirm password"}
                            />
                            <FormFieldFooter
                                footer={"Retype your password to confirm."}
                                errorMessage={errorMsgs["confirmedPassword"]}
                                isError={errorMsgs["confirmedPassword"].length > 0}
                            />
                        </div>

                    </div>
                    <div className="d-flex flex-column gap-3">
                        <button type="button" className="btn btn-primary p-3 text-center">
                            Get Started
                        </button>
                        <Link to="/login" type="button" className="btn btn-outline-secondary p-3 text-center">
                            Back to Log in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}