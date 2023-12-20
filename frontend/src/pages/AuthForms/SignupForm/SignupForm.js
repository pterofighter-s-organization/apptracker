import { useState, useContext } from "react"

//components
import { TextInput } from "../../../components/Inputs/TextInput"
import { PasswordInput } from "../../../components/Inputs/PasswordInput"
import { SubmitButton } from "../../../components/Buttons/SubmitButton"
import { InputHeader } from "../../../components/Inputs/InputHeader"
import { InputFooter } from "../../../components/Inputs/InputFooter"
import { showNotification } from "../../../components/NotificationList/components/Notification/Notification"

//layouts
import { InputLayout } from "../../../layouts/InputLayout"

//helpers
import { customSignupValidations } from "../../../helpers/auth"

//components
import { LoadingDisplay } from "../../../components/Displays/LoadingDisplay"

//private-components
import { AuthFormHeader } from "../components/AuthFormHeader"
import { RedirectLink } from "../components/RedirectLink"

//private-layouts
import { AuthPageLayout } from "../layouts/AuthPageLayout"
import { AuthFieldsLayout } from "../layouts/AuthFieldsLayout"
import { AuthFormLayout } from "../layouts/AuthFormLayout"

//contexts
import { AuthContext } from "../../../hooks/contexts/AuthContext"

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
    const [isSubmit, setIsSubmit] = useState(false)

    const { loginUser1, registerUser } = useContext(AuthContext)

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

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmit(true)

        try {
            const validatedFormData = await customSignupValidations(formData)
            const validatedNewUser = await registerUser({
                username: validatedFormData.username.value,
                password: validatedFormData.newPassword.value
            })
            await loginUser1(validatedNewUser)

            showNotification({
                status: "SUCCESS",
                message: "User created! Now redirecting to your dashboard."
            })
        } catch (errors) {
            console.log(errors)
            if (errors?.code === 'ERR_CUSTOM_VALIDATION') {
                setFormData(errors.data)
            } if (errors?.code === 'ERR_BAD_RESPONSE') {
                showNotification({
                    status: "FAIL",
                    message: "Username can't be use, create a new one!"
                })
                setFormData({
                    ...formData,
                    username: {
                        ...formData.username,
                        error: "Username can't be use, create a new one!"
                    }
                })
            } else {
                showNotification({
                    status: "FAIL",
                    errors: errors
                })
            }
        } finally {
            setIsSubmit(false)
        }
    }

    if (isSubmit) {
        return (
            <LoadingDisplay />
        )
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