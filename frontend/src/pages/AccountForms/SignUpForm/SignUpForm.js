import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

//components
import { FormFieldHeader } from "../../../components/FormFieldHeader"
import { FormFieldFooter } from "../../../components/FormFieldFooter"
import { TextInput } from "../../../components/Inputs/TextInput"

//helpers
import * as formHelpers from "../../../helpers/formHelpers"

export default function SignUpForm({ }) {

    const [formData, setFormData] = useState(null)

    const errorMsgs = {
        "username": "",
        "password": "",
        "retypedPassword": ""
    }

    useEffect(() => {
        const basicFormData = {
            "username": "",
            "password": "",
            "retypedPassword": ""
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
                            <FormFieldHeader header={"Set up a password"} isRequired={true} />
                            <TextInput
                                value={formData["password"]}
                                updateValue={formHelpers.setInputData(setFormData, "password")}
                                label={"password"}
                            />
                            <FormFieldFooter
                                footer={"Enter your account password."}
                                errorMessage={errorMsgs["password"]}
                                isError={errorMsgs["password"].length > 0}
                            />
                        </div>
                        <div className="d-flex flex-column gap-3">
                            <FormFieldHeader header={"Confirm password"} isRequired={true} />
                            <TextInput
                                value={formData["retypedPassword"]}
                                updateValue={formHelpers.setInputData(setFormData, "retypedPassword")}
                                label={"the same password"}
                            />
                            <FormFieldFooter
                                footer={"Retype your password to ensure."}
                                errorMessage={errorMsgs["retypedPassword"]}
                                isError={errorMsgs["retypedPassword"].length > 0}
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