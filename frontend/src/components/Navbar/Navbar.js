import { useEffect, useState, useContext } from "react"

//components
import { showSuccessNotification, showFailNotification } from "../NotificationList/components/Notification/Notification"

//navs
import { SideNav } from "./SideNav"
import { DropdownNav } from "./DropdownNav"

//constants
import { SCREEN_BREAKPOINTS } from "../../constants/constants"

//contexts
import { AuthContext } from "../../hooks/contexts/AuthContext"

export default function Navbar() {

    const [isMobile, setIsMobile] = useState(false)
    const { logoutUser } = useContext(AuthContext)

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

    const handleLogout = (e) => {
        e.preventDefault()

        logoutUser()
            .then(() => {
                showSuccessNotification({
                    message: "Logout Successful!"
                })
            }).catch((errors) => {
                showFailNotification({
                    errors: errors
                })
            })
    }

    return (
        <>
            {
                isMobile ?
                    <DropdownNav
                        id={"dropdownnav"}
                        handleLogout={handleLogout}
                    />
                    :
                    <SideNav
                        id={"sidenav"}
                        handleLogout={handleLogout}
                    />
            }
        </>
    )
}