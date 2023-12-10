import { useEffect, useState } from "react";


export default function withToggleControl(Component) {
    function ToggleControl({ id, ...props }) {
        const [toggle, setToggle] = useState(false)

        //in password, can not give id and it will not trigger the window click effect.
        useEffect(() => {
            const handleClick = (e) => {
                const toggleElement = document.getElementById(id)
                const ifUntoggle = (toggleElement && !toggleElement.contains(e.target))

                if (ifUntoggle) {
                    setToggle(false)
                }
            }
            document.addEventListener('click', handleClick)

            return () => {
                document.removeEventListener('click', handleClick)
            }
        }, [id])

        const handleToggle = (e) => {
            e.preventDefault()
            setToggle(true)
        }

        const handleUntoggle = (e) => {
            e.preventDefault()
            setToggle(false)
        }

        return (
            <Component
                id={id}
                toggle={toggle}
                handleToggle={handleToggle}
                handleUntoggle={handleUntoggle}
                {...props}
            />
        )
    }
    return ToggleControl
}