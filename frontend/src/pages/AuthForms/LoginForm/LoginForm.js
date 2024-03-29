import { useContext, useState } from "react"

//components
import { TextInput } from "../../../components/Inputs/TextInput"
import { PasswordInput } from "../../../components/Inputs/PasswordInput"
import { SubmitButton } from "../../../components/Buttons/SubmitButton"
import { InputHeader } from "../../../components/Inputs/InputHeader"
import { InputFooter } from "../../../components/Inputs/InputFooter"
import { showSuccessNotification, showFailNotification } from "../../../components/NotificationList/Notification/Notification"
import { LoadingDisplay } from "../../../components/Displays/LoadingDisplay"
import { ErrorDisplay } from "../../../components/Displays/ErrorDisplay"

//layouts
import { InputLayout } from "../../../layouts/InputLayout"

//helpers
import { isCodeNetworkError, updateLoginErrors } from "../../../helpers/auth"

//private-components
import { RedirectLink } from "../components/RedirectLink"
import { AuthFormHeader } from "../components/AuthFormHeader"

//private-layouts
import { AuthPageLayout } from "../layouts/AuthPageLayout"
import { AuthFormLayout } from "../layouts/AuthFormLayout"

//context
import { AuthContext } from "../../../hooks/contexts/AuthContext"

export default function LoginForm() {

    const [formData, setFormData] = useState({
        username: {
            value: "",
            error: ""
        },
        password: {
            value: "",
            error: ""
        }
    })

    const { auth, loginUser } = useContext(AuthContext)
    const [isValidating, setIsValidating] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsValidating(true)

        loginUser({
            username: formData.username.value,
            password: formData.password.value
        }).then((result) => {
            showSuccessNotification({
                message: `Welcome ${result.username}! Redirected you to dashboard.`
            })
        }).catch((errors) => {
            setFormData(updateLoginErrors(formData, errors))
            showFailNotification({
                errors: errors
            })
        }).finally(() => {
            setIsValidating(false)
        })
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

    //TODO: add a loading screen
    if (isValidating) {
        return <LoadingDisplay />
    }

    if (isCodeNetworkError(auth.errors)) {
        return (
            <ErrorDisplay
                errors={auth.errors}
            />
        )
    }

    return (
        <AuthPageLayout>
            <AuthFormLayout handleSubmit={handleSubmit}>
                <AuthFormHeader
                    label={"Log in"}
                    description={"Sign in to access the app's features!"}
                />
                <>
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
                    <InputLayout isError={formData.password.error.length > 0}>
                        <InputHeader
                            header={"Password"}
                            isRequired={"*"}
                        />
                        <PasswordInput
                            name={"password"}
                            value={formData.password.value}
                            handleChange={handleChange}
                        />
                        <InputFooter
                            footer={"Enter your password."}
                            errorMessage={formData.password.error}
                        />
                    </InputLayout>
                    <div />
                    <SubmitButton
                        label={"sign in"}
                    />
                    <div />
                    <RedirectLink
                        link={"/signup"}
                        label={"make a new account!"}
                    />
                </>
            </AuthFormLayout>
        </AuthPageLayout>
    )
}