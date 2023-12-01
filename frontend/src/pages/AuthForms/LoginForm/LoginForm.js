import { useState } from "react"

//css
import "./LoginForm.css"

export default function LoginForm(){

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

    return(
        <div className="login-form">

        </div>
    )
}