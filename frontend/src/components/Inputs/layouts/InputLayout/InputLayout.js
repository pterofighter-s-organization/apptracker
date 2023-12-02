

//css
import "./InputLayout.css"

export default function InputLayout({ header, footer, formDataObj, isRequired, children }) {

    //this file's css can apply to its children
    //it also defines the common arrangement of the components that uses this layout.
    return (
        <div className="input-layout">
            <span className={`input-header ${(formDataObj.error.length > 0) ? "input-text-error" : ""}`}>
                {header} {isRequired ? "*" : null}
            </span>
            {children}
            <span className={`input-footer ${(formDataObj.error.length > 0) ? "input-text-error" : ""}`}>
                -
                <span className="input-footer-text">
                    {
                        (formDataObj.error.length > 0) ?
                            formDataObj.error
                            :
                            footer
                    }
                </span>
            </span>
        </div>
    )
}