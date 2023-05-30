import { useState } from "react"

//sub-components
import { LogUserNavButton, MenuNavButton, EssentialNavButtons, NavButton } from "../components"

//css
import "./CollapseNavbar.css"

export default function CollapseNavbar() {

    const [showFullNav, setShowFullNav] = useState(false)

    function handleChangeMenu(request) {
        if (request === "minimize") {
            setShowFullNav(false)
        } else if (request === "expand") {
            setShowFullNav(true)
        }
    }

    return (
        <nav className="d-flex flex-row w-100 p-1 p-sm-2" style={{ backgroundColor: "#2C4096" }}>
            {showFullNav ?

                <div className="py-3 w-100" id="collapse-navbar-slidedown">
                    <MenuNavButton
                        showLabel={true}
                        handleChangeMenu={handleChangeMenu}
                    />
                    <div className="my-3 d-flex flex-column">
                        <EssentialNavButtons showLabel={showFullNav} />
                    </div>
                    <LogUserNavButton showLabel={true} />
                </div>
                :
                <div className="d-flex flex-row gap-3 w-100" id="collapse-navbar-slideup">
                    {/* divs surrounding ensure the menu button doesnt get stretched */}
                    <div className="">
                        <MenuNavButton
                            showLabel={false}
                            handleChangeMenu={handleChangeMenu}
                        />
                    </div>
                    <div className="d-flex flex-row ms-auto gap-0">
                        <NavButton
                            icon={"plus-circle"}
                            label={"New App"}
                            showLabel={false}
                            route={"/"}
                            tooltipText={"you can click here to track a new app"}
                        />
                        <LogUserNavButton showLabel={false} />
                    </div>

                </div>
            }
        </nav>
    )
}