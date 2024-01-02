
//hocs
import { withExpandControl } from "../../../hocs/withExpandControl"

//css
import "./PasswordInput.css"

function PasswordInput({
    maxWidth, name, value, handleChange,
    isExpand, handleExpand, handleMinimize,
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
                autoComplete="true"
            />
            {
                isExpand ?
                    <i
                        className="password-input-hide-toggle bi bi-eye-fill"
                        onClick={(e) => {
                            handleMinimize(e)
                            handleHide(e)
                        }}
                    ></i>
                    :
                    <i
                        className="password-input-hide-toggle bi bi-eye-slash-fill"
                        onClick={(e) => {
                            handleExpand(e)
                            handleShow(e)
                        }}
                    ></i>
            }
        </div>
    )
}

export default withExpandControl(PasswordInput)