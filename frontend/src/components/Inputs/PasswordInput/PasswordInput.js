
//private-layouts
import { InputLayout } from "../layouts/InputLayout";

//hocs
import { withToggleControl } from "../../../hocs/withToggleControl";

//css
import "./PasswordInput.css"

function PasswordInput({
    maxWidth, name, formDataObj, handleChange,
    toggle, handleToggle, handleUntoggle,
    ...props
}) {

    const handleShow = (e) => {
        e.preventDefault()
        const element = document.getElementById(name)
        element.type = "text"
    }

    const handleHide = (e) => {
        e.preventDefault()
        const element = document.getElementById(name)
        element.type = "password"
    }

    return (
        <InputLayout
            formDataObj={formDataObj}
            {...props}
        >
            <div className="password-input">
                <input
                    id={name}
                    type="password"
                    className={`password-input-box input-box ${formDataObj.error.length > 0 ? "input-box-error" : ""}`}
                    style={{ maxWidth: maxWidth || "" }}
                    name={name}
                    value={formDataObj.value}
                    onChange={handleChange}
                    placeholder={name.toUpperCase()}
                />
                {
                    toggle ?
                        <i
                            className="password-input-hide-toggle bi bi-eye-fill"
                            onClick={(e) => {
                                handleUntoggle(e)
                                handleHide(e)
                            }}
                        ></i>
                        :
                        <i
                            className="password-input-hide-toggle bi bi-eye-slash-fill"
                            onClick={(e) => {
                                handleToggle(e)
                                handleShow(e)
                            }}
                        ></i>
                }
            </div>
        </InputLayout>
    )
}

export default withToggleControl(PasswordInput)