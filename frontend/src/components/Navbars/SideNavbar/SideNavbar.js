import { useState } from "react";

//components
import { MenuNavButton, LogUserNavButton, EssentialNavButtons } from "../components";

//css
import "./SideNavbar.css"

export default function NavSidebar({ windowHeight }) {

    const expanded = {
        width: 275,
        show: true,
        padding: 4,
    }

    const minimized = {
        width: 100,
        show: false,
        padding: 3,
    }

    const [menuOption, setMenuOption] = useState(minimized)

    //do not use usememo here because these arn't expensive to compute

    const navbarWidth = menuOption.width //px
    const showFullNav = menuOption.show
    const navPadding = menuOption.padding

    function handleChangeMenu(request) {
        const sidebar = document.getElementById("side-navbar")

        if (request === "minimize") {
            setMenuOption(minimized)
        } else if (request === "expand"){
            setMenuOption(expanded)
            sidebar.classList.add("closed")
        }

        setTimeout(() => {
            sidebar.className = sidebar.className.replace("closed", "")
        }, 300)
    }

    return (
        <nav
            id="side-navbar"
            style={{ minWidth: navbarWidth.toString() + "px", maxWidth: navbarWidth.toString() + "px", minHeight: windowHeight, backgroundColor: "#2C4096" }}>
            <div className={`sticky-top p-${navPadding.toString()}`}>
                {/* <NavButton
                icon={"box-arrow-left"}
                text={"Log out"}
                /> */}
                {/* <div className="fixed-bottom p-4">
                
                </div> */}
                <MenuNavButton
                    showLabel={showFullNav}
                    handleChangeMenu={handleChangeMenu}
                />
                <div className="my-5 d-flex flex-column gap-3">
                    <EssentialNavButtons showLabel={showFullNav} />
                </div>
                <LogUserNavButton showLabel={showFullNav} />
            </div>
        </nav>
    )
}