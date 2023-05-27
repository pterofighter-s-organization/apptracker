import React, { useState, useEffect } from "react"

//utils
import useWindowSizeManager from "../../hooks/useWindowSizeManager.js"

//components
import NavSidebar from "./components/Sidebar/NavSideBar.js"
import NavCollapseBar from "./components/CollapseBar/NavCollapseBarTest.js"

export default function Navbar({ breakpoint }) {

    const { windowWidth, windowHeight } = useWindowSizeManager()
    const [sideBarShow, setSidebarShow] = useState(true)

    //the breakpoint is only what you want this to show before the breakpoint size
    
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
        <>
            {sideBarShow ?
                <NavSidebar windowHeight={windowHeight} />
                :
                <NavCollapseBar/>
            }
        </>
    )
}