import { useEffect, useState } from "react"

//hooks
import useWindowSize from "../hooks/useWindowSize"

//utils
import { remToPx } from "../utils/measurements"


export default function withVisibleCardCount(Component) {
    function VisibleCardCount({ id, cardX, cardY, isPreview, ...props }) {
        const [clicks, setClicks] = useState(1)
        const [cardCount, setCardCount] = useState(1) //default at 1, multiply by number of cols
        const { windowWidth, windowHeight } = useWindowSize()
        //based on the given window x and y, decide how many cards it should shown at once.
        //measure x, decide how many it can show in row.
        //Using breakpoint, we will decide how many cards it should show

        useEffect(() => {
            const gapInPx = remToPx((windowWidth > 1200) ? 1.25 : 1) //in rem
            const listElement = document.getElementById(id)

            const measureColCount = () => {
                const cardXInPx = (remToPx(cardX) + gapInPx) - gapInPx
                return Math.floor((listElement.offsetWidth) / cardXInPx)
            }

            const measureRowCount = () => {
                const cardYInPx = remToPx(cardY) + gapInPx
                return Math.floor((windowHeight) / cardYInPx)
            }

            const calculateCardCount = () => {
                const rowCount = measureRowCount()
                const colCount = measureColCount()
                
                if (isPreview) {
                    return (colCount)
                } else {
                    return ((rowCount * colCount))
                }
            }

            setCardCount(calculateCardCount())
        }, [isPreview, id, windowWidth, windowHeight, cardX, cardY])

        const handleClick = (e) => {
            e.preventDefault()
            const multiplier = clicks + 1
            setClicks(multiplier)
            setCardCount(cardCount * multiplier)
        }

        return <Component
            id={id}
            cardCount={cardCount}
            handleClick={handleClick}
            isPreview={isPreview}
            {...props}
        />
    }
    return VisibleCardCount
}