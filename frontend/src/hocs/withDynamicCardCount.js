import { useEffect, useState } from "react"

export default function withDynamicCardCount(Component, elementName) {
    function DynamicCardCount({ type, isPreview, ...props }) {
        const [initialCount, setInitialCount] = useState(1)
        const [cardCount, setCardCount] = useState(1)

        useEffect(() => {
            const listElement = document.getElementById(elementName + "-" + type)
            const cardElement = (listElement && listElement.children[0]) ? listElement.children[0] : listElement

            const calculateCardCount = () => {
                const colCount = Math.floor(listElement.offsetWidth / cardElement.offsetWidth)
                const rowCount = Math.floor(window.innerHeight / cardElement.offsetHeight)
                const rowPositiveCount = rowCount > 0 ? rowCount : 1
                const colPositiveCount = colCount > 0 ? colCount : 1

                return isPreview ? (colPositiveCount * Math.ceil(rowPositiveCount / 4)) : (rowPositiveCount * colPositiveCount)
            }

            const handleCalculation = () => {
                const calculatedCardCount = calculateCardCount()
                setCardCount(calculatedCardCount)
                setInitialCount(calculatedCardCount)
            }

            handleCalculation()
            window.addEventListener("resize", handleCalculation)

            return () => {
                window.removeEventListener("resize", handleCalculation)
            }
        }, [isPreview, type])

        const handleAddCount = (e) => {
            e.preventDefault()
            setCardCount((prev) => prev + (initialCount > 20 ? initialCount : 20))
        }

        const handleResetCount = (e) => {
            e.preventDefault()
            setCardCount(initialCount)
            window.scrollTo({
                top: document.body.scrollHeight - (initialCount * (15 * 16)),
                behavior: 'smooth'
            });
        }

        return <Component
            initialCount={initialCount}
            cardCount={cardCount}
            handleAddCount={handleAddCount}
            handleResetCount={handleResetCount}
            type={type}
            isPreview={isPreview}
            {...props}
        />
    }
    return DynamicCardCount
}