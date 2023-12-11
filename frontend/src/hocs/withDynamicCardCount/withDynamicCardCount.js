import { useEffect, useState } from "react"

export default function withDynamicCardCount(Component, elementName) {
    function DynamicCardCount({ type, isPreview, cards, ...props }) {
        const [initialCount, setInitialCount] = useState(1)
        const [cardCount, setCardCount] = useState(1)

        useEffect(() => {
            const listElement = document.getElementById(elementName + "-" + type)
            const cardElement = (listElement && listElement.children[0]) ? listElement.children[0] : listElement
            const headerInPx = isPreview ? (300) + ((1.25 * 16) * 2) : 0 //actual header height + card header + gap

            const calculateCardCount = () => {
                const colCount = Math.floor(listElement.offsetWidth / cardElement.offsetWidth)
                const rowCount = Math.floor((window.innerHeight - headerInPx) / cardElement.offsetHeight)
                const rowPositiveCount = rowCount > 0 ? rowCount : 1
                const colPositiveCount = colCount > 0 ? colCount : 1

                return (rowPositiveCount * colPositiveCount)
                // return isPreview ? (rowPositiveCount * Math.ceil(colPositiveCount / 6)) : (rowPositiveCount * colPositiveCount)
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

            //once cards.length gets changed then we check again.
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
            cards={cards}
            cardCount={cardCount}
            initialCount={initialCount}
            handleAddCount={handleAddCount}
            handleResetCount={handleResetCount}
            type={type}
            isPreview={isPreview}
            {...props}
        />
    }
    return DynamicCardCount
}