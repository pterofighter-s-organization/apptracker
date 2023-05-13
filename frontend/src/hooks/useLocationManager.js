import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useLocationManager() {

    const location = useLocation();
    const hash = location.hash.replace("#", "")

    useEffect(() => {

        //delay a little for the section to load
        setTimeout(() => {
            if (hash && hash.length > 0) {
                const element = document.getElementById(hash)
                if (element) {
                    element.scrollIntoView()
                    // element.scrollIntoView();
                }
            }
        }, 100)

    }, [hash])

}