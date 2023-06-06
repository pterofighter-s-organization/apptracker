import { useState } from "react"

//sub-components
import { MenuNavButton, EssentialNavButtons, PinnedAppButton, NewAppButton } from "../components/Buttons"

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

    function minimizeMenu() {
        //whenever a new page is clicked, the menu minimizes.
        setShowFullNav(false)
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
                        <EssentialNavButtons
                            showLabel={true}
                            minimizeMenu={minimizeMenu}
                        />
                    </div>
                    <NewAppButton
                        showLabel={true}
                        minimizeMenu={minimizeMenu}
                    />
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
                        <NewAppButton
                            showLabel={false}
                            minimizeMenu={minimizeMenu}
                        />
                        <PinnedAppButton
                            showLabel={false}
                            minimizeMenu={minimizeMenu}
                        />
                    </div>

                </div>
            }
        </nav>
    )
}