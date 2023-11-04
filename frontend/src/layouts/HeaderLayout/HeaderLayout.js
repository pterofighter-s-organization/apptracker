

//css
import "./HeaderLayout.css"

export default function HeaderLayout({ children, title }) {

    return (
        <div className="header-layout">
            <h2 className="header-layout-title">
                {title}
            </h2>
            <h6>
                {children}
            </h6>
        </div>
    )
}