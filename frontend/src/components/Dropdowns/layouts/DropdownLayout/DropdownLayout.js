


//css
import "./DropdownLayout.css"

export default function DropdownLayout({ className, children }) {

    return (
        <div className={`${className} dropdown`}>
            {children}
        </div>
    )
}