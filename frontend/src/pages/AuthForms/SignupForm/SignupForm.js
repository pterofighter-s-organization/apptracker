import { useState } from "react"

//components
import { TextInput } from "../../../components/Inputs/TextInput"
import { PasswordInput } from "../../../components/Inputs/PasswordInput"
import { SubmitButton } from "../../../components/Buttons/SubmitButton"
import { InputHeader } from "../../../components/Inputs/InputHeader"
import { InputFooter } from "../../../components/Inputs/InputFooter"

//layouts
import { InputLayout } from "../../../layouts/InputLayout"

//helpers
import { isPasswordValid } from "../../../helpers/formHelpers"

//privater-components
import { AuthFormHeader } from "../components/AuthFormHeader"
import { RedirectLink } from "../components/RedirectLink"

//private-layouts
import { AuthPageLayout } from "../layouts/AuthPageLayout"
import { AuthFieldsLayout } from "../layouts/AuthFieldsLayout"
import { AuthFormLayout } from "../layouts/AuthFormLayout"

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
        <AuthPageLayout>
            <AuthFormLayout>
                <AuthFormHeader
                    label={"sign up"}
                    description={"Create a new account to start efficently tracking jobs!"}
                />
                <AuthFieldsLayout handleSubmit={handleSubmit}>
                    <InputLayout isError={formData.username.error.length > 0}>
                        <InputHeader
                            header={"Username"}
                            isRequired={"*"}
                        />
                        <TextInput
                            name={"username"}
                            value={formData.username.value}
                            handleChange={handleChange}
                        />
                        <InputFooter
                            footer={"Enter your username."}
                            errorMessage={formData.username.error}
                        />
                    </InputLayout>
                    <InputLayout isError={formData.newPassword.error.length > 0}>
                        <InputHeader
                            header={"New password"}
                            isRequired={"*"}
                        />
                        <PasswordInput
                            name={"newPassword"}
                            value={formData.newPassword.value}
                            handleChange={handleChange}
                        />
                        <InputFooter
                            footer={"Must have 8 chars, 1 special char, 1 lower and uppercase."}
                            errorMessage={formData.newPassword.error}
                        />
                    </InputLayout>
                    <InputLayout isError={formData.confirmPassword.error.length > 0}>
                        <InputHeader
                            header={"Confirm password"}
                            isRequired={"*"}
                        />
                        <PasswordInput
                            name={"confirmPassword"}
                            value={formData.confirmPassword.value}
                            handleChange={handleChange}
                        />
                        <InputFooter
                            footer={"Re-type your password here to confirm."}
                            errorMessage={formData.confirmPassword.error}
                        />
                    </InputLayout>
                    <div />
                    <SubmitButton label={"create account"} />
                    <div />
                    <RedirectLink
                        link={"/login"}
                        label={"Back to sign in!"}
                    />
                </AuthFieldsLayout>
            </AuthFormLayout>
        </AuthPageLayout>
    )
}