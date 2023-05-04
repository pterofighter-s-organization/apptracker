import React, { useState, useMemo } from "react"

import "./Navbar.css"
import NavbarElements from "./NavbarElements"
import NavMenuButton from "./Button/NavMenuButton"
import NavLogUserButton from "./Button/NavLogUserButton"

export default function Navbar ({windowWidth}) {

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

    const [menuOption, setMenuOption] = useState(expanded)

    const navBarWidth = useMemo(() => (
        menuOption.width //px
    ),[menuOption])
    const showFullNav = useMemo(() => ( 
        menuOption.show
    ),[menuOption])
    const navPadding = useMemo(() => (
        menuOption.padding
    ),[menuOption])

    function handleChangeMenu (request) {
        if(request === "expand"){
            setMenuOption(expanded)
        }else if(request === "minimize"){
            setMenuOption(minimized)
        }
        console.log("test")
    }

    return (
        // <div 
        //     className="collapse collapse-horizontal show" 
        //     id="collapseWidthExample" 
        //     style={{ width: "400px", minHeight: "100vh", backgroundColor: "#2C4096" }}>
        //     <div className="sticky-top p-5" >
        //         a
        //     </div>
        // </div>
        // <div
        //     className=""
        //     id="collapseWidthExample"
        //     style={{ minWidth: "275px", minHeight: "100vh", backgroundColor: "#2C4096" }}>
        //     <NavbarElements show={true}/>
        // </div>
        <div
            className=""
            id="collapseWidthExample"
            style={{ minWidth: navBarWidth.toString() + "px", minHeight: window.innerHeight, backgroundColor: "#2C4096" }}>
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
        </div>
    )
}