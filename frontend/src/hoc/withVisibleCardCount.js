import { useEffect, useState } from "react"

//utils
import { debounce } from "../utils/debounce"

export default function withVisibleCardCount(Component) {
    function VisibleCardCount({ id, isPreview, ...props }) {
        const [initialCount, setInitialCount] = useState(1)
        const [cardCount, setCardCount] = useState(1) //default at 1, multiply by number of cols
        //based on the given window x and y, decide how many cards it should shown at once.
        //measure x, decide how many it can show in row.
        //Using breakpoint, we will decide how many cards it should show

        useEffect(() => {
            // const gapInPx = remToPx((windowWidth > 1200) ? 1.25 : 1)
            const gapInPx = 0 //no need to get the gap as element child already included
            const listElement = document.getElementById(id)
            const listElementCard = listElement.children[0]

            const measureColCount = () => {
                const cardXInPx = (listElementCard.offsetWidth + gapInPx)
                return Math.floor((listElement.offsetWidth) / cardXInPx)
            }

            const measureRowCount = () => {
                const cardYInPx = (listElementCard.offsetHeight + gapInPx)
                return Math.floor((window.innerHeight) / cardYInPx)
            }

            const calculateCardCount = () => {
                const rowCount = measureRowCount()
                const colCount = measureColCount()

                if (isPreview) {
                    return (colCount * Math.floor(rowCount / 2)) //making sure it only takes half the screen height
                } else {
                    return ((rowCount * colCount) + 0) //purposely + 1 for scrolling.
                }
            }

            const handleCardCount = () => {
                const calculatedCount = calculateCardCount()
                setCardCount(calculatedCount)
                setInitialCount(calculatedCount)
            }

            handleCardCount()
            window.addEventListener("resize", handleCardCount)

            return () => {
                window.removeEventListener("resize", handleCardCount)
            }
        }, [isPreview, id])

        useEffect(() => {
            //detect if is scrolling down
            let oldScrollY = window.scrollY || document.documentElement.scrollTop;
            const handleScrollLoading = debounce(() => {
                // no need to detect when to end because if it ended, there will be no more scrolling.
                if (oldScrollY < (window.scrollY || document.documentElement.scrollTop)) {
                    setCardCount((prev) => prev + initialCount)
                }
            }, 400)

            if (!isPreview) { //only when it isn't a preview
                document.addEventListener('scroll', handleScrollLoading);
            }

            return () => {
                document.removeEventListener('scroll', handleScrollLoading)
            }
            //to avoid resizing and the eventlistener got removed by accident
        }, [initialCount, isPreview])

        return <Component
            id={id}
            cardCount={cardCount}
            isPreview={isPreview}
            {...props}
        />
    }
    return VisibleCardCount
}