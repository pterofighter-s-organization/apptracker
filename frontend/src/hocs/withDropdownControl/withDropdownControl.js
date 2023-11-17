import { useEffect, useState } from "react"

//css
import "./withDropdownControl.css"

export default function withDropdownControl(Component) {
    function DropdownControl({ id, ...props }) {
        const [showDropdown, setShowDropdown] = useState(false)

        useEffect(() => {
            const handleClick = (e) => {
                const dropdownElement = document.getElementById(id)
                const target = e.target //where you clicked
                const ifCloseDropdown = (dropdownElement && !dropdownElement.contains(target))

                if (ifCloseDropdown) {
                    setShowDropdown(false)
                }
            }

            document.addEventListener("click", handleClick)

            return () => {
                document.removeEventListener("click", handleClick)
            }
        }, [id])

        const handleCloseDropdown = (e) => {
            e.preventDefault()
            setShowDropdown(false)
        }

        const handleOpenDropdown = (e) => {
            e.preventDefault()
            setShowDropdown(true)
        }

        return <Component
            id={id}
            showDropdown={showDropdown}
            handleCloseDropdown={handleCloseDropdown}
            handleOpenDropdown={handleOpenDropdown}
            {...props}
        />
    }
    return DropdownControl
}