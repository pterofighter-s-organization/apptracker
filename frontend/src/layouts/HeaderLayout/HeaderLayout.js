//components
import { FilterDropdown } from "../../components/Dropdowns/FilterDropdown"

//css
import "./HeaderLayout.css"

export default function HeaderLayout({ title, status, handleStatus, FilterComponents, children }) {

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
            <div className="header-layout-filters">
                {FilterComponents}
                {
                    status ?
                        <FilterDropdown
                            id={"status-dropdown"}
                            label={"status"}
                            value={status}
                            options={{
                                "archived": "#808080",
                                "active": "#009900"
                            }}
                            handleOption={handleStatus}
                        />
                        :
                        null
                }
            </div>
        </div>
    )
}