


//css
import "./HeaderLayout.css"

export default function HeaderLayout({ children }) {

    const [title, description] = children

    return (
        <div className="header-layout">
            <div className="header-layout-title">
                {title}
            </div>
            <div className="header-layout-description">
                {description}
            </div>
        </div>
    )
}