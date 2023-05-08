import React, { useState } from "react"

//components
import NavbarElements from "../NavbarElements.js"
import NavMenuButton from "../Button/NavMenuButton.js"
import NavLogUserButton from "../Button/NavLogUserButton.js"

//css
import "./NavSidebar.css"

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

    const navBarWidth = menuOption.width //px
    const showFullNav = menuOption.show
    const navPadding = menuOption.padding

    function handleChangeMenu(request) {

        const sidebar = document.getElementById("nav-sidebar")

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
            id="nav-sidebar"
            style={{ minWidth: navBarWidth.toString() + "px", maxWidth: navBarWidth.toString() + "px", minHeight: windowHeight, backgroundColor: "#2C4096" }}>
            <div className={`sticky-top p-${navPadding.toString()}`}>
                {/* <NavButton
                icon={"box-arrow-left"}
                text={"Log out"}
                /> */}
                {/* <div className="fixed-bottom p-4">
                
                </div> */}
                <NavMenuButton
                    show={showFullNav}
                    handleChangeMenu={handleChangeMenu}
                />
                <div className="my-5 d-flex flex-column gap-3">
                    <NavbarElements show={showFullNav} />
                </div>
                <NavLogUserButton show={showFullNav} />
            </div>
        </nav>
    )
}