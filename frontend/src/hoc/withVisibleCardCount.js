import { useEffect, useState } from "react"

//hooks
import useWindowSize from "../hooks/useWindowSize"

//utils
import { remToPx } from "../utils/measurements"
import { debounce } from "../utils/debounce"

export default function withVisibleCardCount(Component) {
    function VisibleCardCount({ id, cardX, cardY, isPreview, ...props }) {
        const [initialCount, setInitialCount] = useState(1)
        const [cardCount, setCardCount] = useState(1) //default at 1, multiply by number of cols
        const { windowWidth, windowHeight } = useWindowSize()
        //based on the given window x and y, decide how many cards it should shown at once.
        //measure x, decide how many it can show in row.
        //Using breakpoint, we will decide how many cards it should show

        useEffect(() => {
            const gapInPx = remToPx((windowWidth > 1200) ? 1.25 : 1) //in rem
            const listElement = document.getElementById(id)

            const measureColCount = () => {
                const cardXInPx = (remToPx(cardX) + gapInPx)
                return Math.floor((listElement.offsetWidth) / cardXInPx)
            }

            const measureRowCount = () => {
                const cardYInPx = (remToPx(cardY) + gapInPx)
                return Math.floor((windowHeight) / cardYInPx)
            }

            const calculateCardCount = () => {
                const rowCount = measureRowCount()
                const colCount = measureColCount()

                if (isPreview) {
                    return (colCount * Math.floor(rowCount / 2)) //making sure it only takes half the screen height
                } else {
                    return ((rowCount * colCount))
                }
            }

            const calculatedCount = calculateCardCount()
            setCardCount(calculatedCount)
            setInitialCount(calculatedCount)
        }, [isPreview, id, windowWidth, windowHeight, cardX, cardY])

        useEffect(() => {
            //detect if is scrolling down
            const oldScrollY = window.scrollY
            const handleScrollLoading = debounce(() => {
                // no need to detect when to end because if it ended, there will be no more scrolling.
                if (oldScrollY < window.scrollY) {
                    setCardCount((prev) => prev + initialCount)
                }
            }, 400)

            window.addEventListener('scroll', handleScrollLoading);

            return () => { window.removeEventListener('scroll', handleScrollLoading) }
        }, [initialCount])

        return <Component
            id={id}
            cardCount={cardCount}
            isPreview={isPreview}
            {...props}
        />
    }
    return VisibleCardCount
}