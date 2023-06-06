import { useEffect, useState } from "react"

//utils
import { debounce } from "../utils/debounce"

export default function useWindowSizeManager() {

    //custom hook for getting the latest window size

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [windowHeight, setWindowHeight] = useState(window.innerHeight)

    useEffect(() => {

        //delay 250 secs after the user starts resizing to start using the function
        const windowSizeChange = debounce(() => {
            console.log("resize")
            setWindowWidth(window.innerWidth)
            setWindowHeight(window.innerHeight)
        }, 250)

        window.addEventListener("resize", windowSizeChange)
        //demount, making sure no memory leaks
        //this is why I keep getting errors because there were multiple instances running
        //causing unexpected behaviours
        return (
            () => window.removeEventListener("resize", windowSizeChange)
        )
    }, [])

    return {
        windowWidth,
        windowHeight
    }
}