

//css
import "./InputLayout.css"

export default function InputLayout({ children, isError }) {

    return (
        <div className={`input-layout ${isError ? "input-layout-error" : "input-layout-idle"}`}>
            {children}
        </div>
    )
}