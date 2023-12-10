import { useEffect, useState } from "react"

//navs
import { SideNav } from "./SideNav"
import { DropdownNav } from "./DropdownNav"

//constants
import { SCREEN_BREAKPOINTS } from "../../constants/constants"

export default function Navbar() {

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {

        const handleResize = () => {
            //breakpoint for dropdown nav
            setIsMobile(window.innerWidth <= SCREEN_BREAKPOINTS["lg"]) //px
        }

        handleResize() //call the function to check the current size
        window.addEventListener('resize', handleResize)

        //cleanup after the component not in use
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])


    return (
        <>
            {isMobile ? <DropdownNav id={"dropdownnav"}/> : <SideNav id={"sidenav"}/>}
        </>
    )
}