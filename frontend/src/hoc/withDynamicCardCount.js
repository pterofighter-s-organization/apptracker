import { useEffect, useState } from "react"

export default function withDynamicCardCount(Component, increaseCount) {
    function DynamicCardCount({ label, isPreview, ...props }) {
        const [initialCount, setInitialCount] = useState(1)
        const [cardCount, setCardCount] = useState(1)

        useEffect(() => {
            const listElement = document.getElementById("card-list-" + label)
            const cardElement = (listElement.children[0]) ? listElement.children[0] : listElement

            const calculateCardCount = () => {
                const rowCount = Math.floor(listElement.offsetWidth / cardElement.offsetWidth)
                const colCount = Math.floor(window.innerHeight / cardElement.offsetHeight)

                return isPreview ? (colCount * Math.floor(rowCount / 2)) : (rowCount * colCount)
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
        }, [isPreview, label])

        const handleAddCount = (e) => {
            e.preventDefault()
            setCardCount((prev) => prev + (initialCount > increaseCount ? initialCount : increaseCount))
        }

        const handleResetCount = (e) => {
            e.preventDefault()
            setCardCount(initialCount)
        }

        return <Component
            cardCount={cardCount}
            handleAddCount={handleAddCount}
            handleResetCount={handleResetCount}
            label={label}
            {...props}
        />
    }
    return DynamicCardCount
}