import React, { useState, useMemo, useEffect } from "react"

//utils
import useWindowSizeManager from "../../hooks/useWindowSizeManager.js"
import NavSidebar from "./NavSideBar.js"

export default function Navbar() {

    const { windowWidth, windowHeight } = useWindowSizeManager()

    const ifYes = true
    
    const sizesMapToWidth = {
        "s": 576,
        "sm": 768,
        "md": 992,
        "lg": 1200,
        "xl": 1400,
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
        <>
            {ifYes ?
                <NavSidebar windowHeight={windowHeight} />
                :
                <></>
            }
        </>
    )
}