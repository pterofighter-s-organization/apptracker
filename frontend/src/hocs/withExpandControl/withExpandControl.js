import { useEffect, useState } from "react";


export default function withExpandControl(Component) {
    function ExpandControl({ id, ...props }) {
        const [isExpand, setIsExpand] = useState(false)

        //in password, can not give id and it will not trigger the window click effect.
        useEffect(() => {
            const handleClick = (e) => {
                const expandElement = document.getElementById(id)
                const ifMinimize = (expandElement && !expandElement.contains(e.target))

                if (ifMinimize) {
                    setIsExpand(false)
                }
            }

            document.addEventListener('click', handleClick)

            return () => {
                document.removeEventListener('click', handleClick)
            }
        }, [id])

        const handleExpand = (e) => {
            e.preventDefault()
            setIsExpand(true)
        }

        const handleMinimize = (e) => {
            e.preventDefault()
            setIsExpand(false)
        }

        return (
            <Component
                id={id}
                isExpand={isExpand}
                handleExpand={handleExpand}
                handleMinimize={handleMinimize}
                {...props}
            />
        )
    }
    return ExpandControl
}