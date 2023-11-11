import { useEffect, useState } from "react"

export default function withDynamicCardCount(Component, increaseCount) {
    function DynamicCardCount({ type, isPreview, ...props }) {
        const [initialCount, setInitialCount] = useState(1)
        const [cardCount, setCardCount] = useState(1)

        useEffect(() => {
            const listElement = document.getElementById("card-list-" + type)
            const cardElement = (listElement.children[0]) ? listElement.children[0] : listElement

            const calculateCardCount = () => {
                const colCount = Math.floor(listElement.offsetWidth / cardElement.offsetWidth)
                const rowCount = Math.floor(window.innerHeight / cardElement.offsetHeight)

                return isPreview ? (colCount * Math.floor(rowCount / 2)) : (rowCount * colCount)
            }

            const handleCalculation = () => {
                const calculatedCardCount = calculateCardCount()
                setCardCount(calculatedCardCount)
                setInitialCount(calculatedCardCount)
                console.log("test")
            }

            handleCalculation()
            window.addEventListener("resize", handleCalculation)

            return () => {
                window.removeEventListener("resize", handleCalculation)
            }
        }, [isPreview, type])

        const handleAddCount = (e) => {
            e.preventDefault()
            setCardCount((prev) => prev + (initialCount > increaseCount ? initialCount : increaseCount))
        }

        const handleResetCount = (e) => {
            e.preventDefault()
            setCardCount(initialCount)
            window.scrollTo({
                top: 0,
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