import { useState } from "react"

//components
import { LogUserNavButton, MenuNavButton, EssentialNavButtons, NavButton } from "../components/Buttons"

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
        <nav style={{ backgroundColor: "#2C4096", padding: "1.25vw 1.25vw" }}>
            {showFullNav ?

                <div className="py-3" id="collapse-navbar">
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
                <div className="d-flex flex-row gap-3" id="collapse-navbar">
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