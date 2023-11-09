import { useEffect, useState } from "react"

export default function useShowMenu(id) {

    const [showMenu, setShowMenu] = useState(false)

    useEffect(() => {
        //can close menu outside of the menu (closing when clicked on any other part of the window)
        const handleClick = (event) => {
            const menuElement = document.getElementById(id)
            const target = event.target
            const ifCloseMenu = (menuElement && !menuElement.contains(target))

            if (ifCloseMenu) {
                setShowMenu(false)
            }
        }

        document.addEventListener("click", handleClick)

        return () => {
            document.removeEventListener("click", handleClick)
        }
    }, [id])

    const handleCloseMenu = (event) => {
        event.preventDefault() //making sure the button press doesn't trigger redirect
        setShowMenu(false)
    }

    const handleOpenMenu = (event) => {
        event.preventDefault()
        setShowMenu(true)
    }

    return {
        showMenu,
        handleCloseMenu,
        handleOpenMenu
    }
}