

//css
import "./InputLayout.css"

export default function InputLayout({ header, footer, formDataObj, isRequired, children }) {

    //this files css can apply to its children

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