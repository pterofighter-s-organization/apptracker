import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useLocationManager() {

    const location = useLocation();
    console.log(location)
    const sectionId = location.hash.replace("#", "")

    useEffect(() => {

        //delay a little for the section to load
        setTimeout(() => {
            if (sectionId && sectionId.length > 0) {
                const element = document.getElementById(sectionId)
                if (element) {
                    element.scrollIntoView()
                    // element.scrollIntoView();
                }
            }
        }, 100)

    }, [sectionId])

}