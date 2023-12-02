import { useState } from "react"
import { Link } from "react-router-dom"

//components
import { TextInput } from "../../../components/Inputs/TextInput"
import { PasswordInput } from "../../../components/Inputs/PasswordInput"
import { InfoReminder } from "../../../components/InfoReminder"
import { SubmitButton } from "../../../components/Buttons/SubmitButton"

//layouts
import { FormLayout } from "../../../layouts/FormLayout"

//private-layouts
import { AuthFormLayout } from "../layouts/AuthFormLayout"

//css
import "./LoginForm.css"
import "../../../styles/Forms.css"

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

    const handleSubmit = (e) => {
        e.preventDefault()

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
        <AuthFormLayout>
            <FormLayout>
                <div className="form-header">
                    <h1>Log In</h1>
                    <h6>Sign in to access the app's features!</h6>
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
                        handleChange={handleChange}
                        header={"username"}
                        footer={"enter your username"}
                        isRequired={true}
                    />
                    <PasswordInput
                        formDataObj={formData.password}
                        name={"password"}
                        handleChange={handleChange}
                        header={"password"}
                        footer={"enter the password"}
                        isRequired={true}
                    />
                    <div />
                    <SubmitButton
                        label={"sign in"}
                    />
                    <Link
                        to={"/signup"}
                        style={{ alignSelf: "center", marginTop: "0.5rem" }}
                    >
                        Make a New Account!
                    </Link>
                </form>
            </FormLayout>
        </AuthFormLayout>
    )
}