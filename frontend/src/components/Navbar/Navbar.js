import React, { useState, useEffect } from "react"

//utils
import useWindowSizeManager from "../../hooks/useWindowSizeManager.js"

//components
import NavSidebar from "./Sidebar/NavSideBar.js"
import NavCollapseBar from "./CollapseBar/NavCollapseBar.js"

export default function Navbar({ breakpoint }) {

    const { windowWidth, windowHeight } = useWindowSizeManager()
    const [sideBarShow, setSidebarShow] = useState(true)

    
    useEffect(() => {

        const sizesMapToWidth = {
            "s": 576,
            "sm": 768,
            "md": 992,
            "lg": 1200,
            "xl": 1400,
        }

        if (windowWidth < sizesMapToWidth[breakpoint]) {
            setSidebarShow(false)
        } else {
            setSidebarShow(true)
        }

    }, [windowWidth, breakpoint])

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
            {sideBarShow ?
                <NavSidebar windowHeight={windowHeight} />
                :
                <NavCollapseBar/>
            }
        </>
    )
}