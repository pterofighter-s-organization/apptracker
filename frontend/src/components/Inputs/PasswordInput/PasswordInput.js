
//hocs
import { withToggleControl } from "../../../hocs/withToggleControl";

//css
import "./PasswordInput.css"

function PasswordInput({
    maxWidth, name, value, handleChange,
    toggle, handleToggle, handleUntoggle,
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
        <div className="password-input">
            <input
                id={name}
                type="password"
                className={`password-input-field input-field`}
                style={{ maxWidth: maxWidth || "" }}
                name={name}
                value={value}
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
    )
}

export default withToggleControl(PasswordInput)