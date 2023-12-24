import { useEffect, useRef } from "react"

//css
import "./TooltipText.css"

export default function TooltipText({ text }) {

    const tooltipRef = useRef(null)

    useEffect(() => {
        if(tooltipRef.current && tooltipRef.current.parentElement.style.position !== "absolute"){
            //this is to ensure the tooltip can appear anywhere from the origin of parent element.
            tooltipRef.current.parentElement.style.position = "relative"
        }
    },[tooltipRef])

    return (
        <div 
            ref={tooltipRef}
            className="tooltip-layout"
        >
            <div className="tooltip-text">
                {text}
            </div>
            <div className="tooltip-text-bottom-arrow" />
        </div>
    )
}