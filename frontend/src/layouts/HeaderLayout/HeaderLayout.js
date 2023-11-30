//components
import { FilterDropdown } from "../../components/Dropdowns/FilterDropdown"

//constants
import { APP_STATUS_COLORS } from "../../constants/constants"

//css
import "./HeaderLayout.css"

export default function HeaderLayout({ title, status, handleStatus, Components, BottomComponents, text, children }) {

    return (
        <div className="header-layout">
            <div className="header-layout-top">
                <div className="header-layout-title">
                    <h1 className="header-layout-title-text">
                        {title}
                    </h1>
                    <h6 className="header-layout-text">
                        {text}
                    </h6>
                </div>
                {
                    status || Components ?
                        <div className="header-layout-components">
                            {Components}
                            {
                                status ?
                                    // <FilterDropdown
                                    //     id={"status-dropdown"}
                                    //     label={"status"}
                                    //     value={status}
                                    //     options={APP_STATUS_COLORS}
                                    //     handleOption={handleStatus}
                                    // />
                                    <FilterDropdown
                                        id={"status-dropdown"}
                                        label={"status"}
                                        value={status}
                                        options={APP_STATUS_COLORS}
                                        handleOption={handleStatus}
                                    />
                                    :
                                    null
                            }
                        </div>
                        :
                        null
                }
            </div>
            {children}
        </div>
    )
}