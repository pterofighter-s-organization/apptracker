import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

//components
import { FormFieldHeader } from "../../../components/FormFieldHeader"
import { FormFieldFooter } from "../../../components/FormFieldFooter"
import { TextInput } from "../../../components/Inputs/TextInput"
import { ConfidentialInput } from "../../../components/Inputs/ConfidentialInput"

//helpers
import * as formHelpers from "../../../helpers/formHelpers"

export default function LoginForm({ }) {

    const [formData, setFormData] = useState(null)

    const errorMsgs = {
        "username": "",
        "password": ""
    }

    useEffect(() => {
        const basicFormData = {
            "username": "",
            "password": "",
        }

        setFormData(basicFormData)
    }, [])

    if (!formData) {
        return <>Loading login form...</>
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center h-100">

            <div className="bg-secondary-subtle py-5 px-4 px-sm-5" style={{ width: "700px", maxWidth: "92.5vw" }}>

                <div className="d-flex flex-column gap-4">
                    <div className="d-flex flex-column text-center">
                        <div className="display-6" style={{ letterSpacing: "0.15vw" }}>
                            Welcome back!
                        </div>
                        <div className="blockquote-footer fs-6 mt-3">
                            Sign in to continue
                        </div>
                    </div>
                    <div className="">
                        * ( required fields )
                    </div>
                    <div className="d-flex flex-column">
                        <div className="d-flex flex-column gap-3">
                            <FormFieldHeader header={"Username"} isRequired={true} />
                            <TextInput
                                value={formData["username"]}
                                updateValue={formHelpers.setInputData(setFormData, "username")}
                                label={"username"}
                            />
                            <FormFieldFooter
                                footer={"Enter your account username."}
                                errorMessage={errorMsgs["username"]}
                                isError={errorMsgs["username"].length > 0}
                            />
                        </div>

                        <div className="d-flex flex-column gap-3">
                            <FormFieldHeader header={"Password"} isRequired={true} />
                            <ConfidentialInput
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

                    </div>
                    <div className="d-flex flex-column gap-3">
                        <button type="button" className="btn btn-primary p-3 text-center">
                            Login
                        </button>
                        <Link to="/signup" type="button" className="btn btn-outline-secondary p-3 text-center">
                            Get Started with a New Account
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}