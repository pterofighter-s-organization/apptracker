import { useContext, useState } from "react"

//components
import { TextInput } from "../../../components/Inputs/TextInput"
import { PasswordInput } from "../../../components/Inputs/PasswordInput"
import { SubmitButton } from "../../../components/Buttons/SubmitButton"
import { InputHeader } from "../../../components/Inputs/InputHeader"
import { InputFooter } from "../../../components/Inputs/InputFooter"

//layouts
import { InputLayout } from "../../../layouts/InputLayout"

//private-components
import { RedirectLink } from "../components/RedirectLink"
import { AuthFormHeader } from "../components/AuthFormHeader"

//private-layouts
import { AuthPageLayout } from "../layouts/AuthPageLayout"
import { AuthFormLayout } from "../layouts/AuthFormLayout"
import { AuthFieldsLayout } from "../layouts/AuthFieldsLayout"

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

    const { auth, getUser } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        getUser({
            username: formData.username.value,
            password: formData.password.value
        }).then((result) => {
            console.log("res", result.data)
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

    return (
        <AuthPageLayout>
            <AuthFormLayout>
                <AuthFormHeader
                    label={"Log in"}
                    description={"Sign in to access the app's features!"}
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
                </AuthFieldsLayout>
            </AuthFormLayout>
        </AuthPageLayout>
    )
}