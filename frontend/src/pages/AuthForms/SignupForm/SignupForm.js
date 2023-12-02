import { useState } from "react"
import { Link } from "react-router-dom"

//components
import { TextInput } from "../../../components/Inputs/TextInput"
import { PasswordInput } from "../../../components/Inputs/PasswordInput"
import { InfoReminder } from "../../../components/InfoReminder"
import { SubmitButton } from "../../../components/Buttons/SubmitButton"

//helpers
import { isPasswordValid } from "../../../helpers/formHelpers"

//layouts
import { FormLayout } from "../../../layouts/FormLayout"

//private-layouts
import { AuthFormLayout } from "../layouts/AuthFormLayout"

//css
import "./SignupForm.css"
import "../../../styles/Forms.css"

export default function SignupForm() {

    const [formData, setFormData] = useState({
        username: {
            value: "",
            error: ""
        },
        newPassword: {
            value: "",
            error: ""
        },
        confirmPassword: {
            value: "",
            error: ""
        }
    })

    //helpers
    const isPasswordConfirmed = () => {
        return formData.newPassword.value === formData.confirmPassword.value && formData.confirmPassword.value.length > 0
    }

    const handleValidation = () => {
        let errflag = false

        if (!isPasswordConfirmed()) {
            setFormData({
                ...formData,
                confirmPassword: {
                    ...formData.confirmPassword,
                    error: "This doesn't match the password you created!"
                }
            })

            errflag = true
        } if (!isPasswordValid(formData.newPassword.value)) {
            setFormData({
                ...formData,
                newPassword: {
                    ...formData.newPassword,
                    error: "Got to be 8 chars, 1 special, 1 lower and 1 upper case!"
                }
            })

            errflag = true
        } if (errflag) {
            //this didn't pass
            return false
        }
        //this passed the validations
        return true
    }

    const handleChange = (e) => {
        e.preventDefault()

        setFormData({
            ...formData,
            [e.target.name]: {
                value: e.target.value,
                error: ""
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!handleValidation()) {
            alert("Please fix the errors to continue!")
            return
        }
        alert(`Successfully created account!`)
        //api call
    }

    return (
        <AuthFormLayout>
            <FormLayout>
                <div className="form-header">
                    <h1>
                        Sign Up
                    </h1>
                    <h6>
                        Create a new account to start efficently tracking jobs!
                    </h6>
                    <div style={{ marginLeft: "0.1rem" }}>
                        <InfoReminder
                            text={"* is required."}
                        />
                    </div>
                </div>
                <form
                    className="form-fields"
                    onSubmit={handleSubmit}
                >
                    <TextInput
                        formDataObj={formData.username}
                        name={"username"}
                        header={"new username"}
                        footer={"type a username that's going to represent you here."}
                        isRequired={true}
                        handleChange={handleChange}
                    />
                    <PasswordInput
                        formDataObj={formData.newPassword}
                        name={"newPassword"}
                        header={"new password"}
                        footer={"must have 8 chars, 1 special char, 1 lower and uppercase."}
                        isRequired={true}
                        handleChange={handleChange}
                    />
                    <PasswordInput
                        formDataObj={formData.confirmPassword}
                        name={"confirmPassword"}
                        header={"confirm password"}
                        footer={"re-type your password here to confirm."}
                        isRequired={true}
                        handleChange={handleChange}
                    />
                    <div />
                    <SubmitButton label={"create account"} />
                    <Link
                        to={"/login"}
                        style={{ alignSelf: "center", marginTop: "0.5rem" }}
                    >
                        Back to Sign In!
                    </Link>
                </form>
            </FormLayout>
        </AuthFormLayout>
    )
}