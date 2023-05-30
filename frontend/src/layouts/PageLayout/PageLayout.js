
import { useState, useEffect } from "react"

//components
import { CollapseNavbar, SideNavbar } from "../../components/Navbars"

//utils
import useWindowSizeManager from "../../hooks/useWindowSizeManager"

export default function PageLayout({ children }) {

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

        if (windowWidth < sizesMapToWidth["lg"]) {
            setSidebarShow(false)
        } else {
            setSidebarShow(true)
        }
    }, [windowWidth])

    return (
        <div className="d-flex flex-column flex-xl-row w-100">
            {sideBarShow ?
                <SideNavbar windowHeight={windowHeight} />
                :
                <CollapseNavbar />
            }
            <div
                className="mt-4 mt-md-3 mt-xxl-1 w-100"
                style={{ padding: "1.25vw 2.5vw" }}
            >
                {children}
            </div>
        </div>
    )
}