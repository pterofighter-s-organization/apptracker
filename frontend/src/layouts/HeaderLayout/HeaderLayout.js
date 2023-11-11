

//css
import { StatusDropdown } from "../../components/Dropdowns/StatusDropdown"
import "./HeaderLayout.css"

export default function HeaderLayout({ children, title, status, handleStatus }) {

    return (
        <div className="header-layout">
            <div className="header-layout-title">
                <h2 className="header-layout-title-text">
                    {title}
                </h2>
                <h6>
                    {children}
                </h6>
            </div>
            <StatusDropdown
                id={"status-dropdown"}
                status={status}
                handleStatus={handleStatus}
            />
        </div>
    )
}