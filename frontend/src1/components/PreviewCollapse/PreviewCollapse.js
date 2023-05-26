//react
import React, { useCallback, useEffect, useState } from 'react';

//hooks
import useWindowSizeManager from '../../hooks/useWindowSizeManager';

//components
import { PreviewCollapseButton } from "./components"

//utils
import { viewSizeToPx } from "../../utils/measurements.js"

export default function PreviewCollapse(props) {

    //here is what this semi component needs
    const {
        collapseId,
        maxVhOfCollapse,
        text,
        overflow,
        dependency,
    } = props

    const { windowWidth, windowHeight } = useWindowSizeManager()
    const [showCollapseButton, setShowCollapseButton] = useState(false)
    const [showCollapse, setShowCollapse] = useState(true)
    const [change, setChange] = useState(0)

    const collapseRef = document.getElementById(collapseId)
    const containerRef = collapseRef ? collapseRef.children[0] : null

    //do usecallback to avoid function being re-render everytime and triggers the useeffect below
    const showRemainingContents = useCallback((request) => {

        // console.log(collapseRef, request, collapseId)
        if (collapseRef) {
            if (request) {
                collapseRef.style.overflow = ""
                collapseRef.style.maxHeight = ""
                setShowCollapseButton(true)
            } else {
                collapseRef.style.overflow = overflow
                collapseRef.style.maxHeight = maxVhOfCollapse.toString() + "vh"
                setShowCollapseButton(false)
            }
        }
    }, [setShowCollapseButton, collapseRef, overflow, maxVhOfCollapse])

    //start of (1): side effects of window sizes changing
    useEffect(() => {

        if (collapseRef) {
            if (containerRef) {

                const vhToPx = viewSizeToPx(maxVhOfCollapse, windowHeight)
                //vh following how much you give to the container at the bottom 
                const show = vhToPx < containerRef.clientHeight

                //debugging, the container in px, parentcontainer in px, and parentcontainer in px int
                // console.log(vhToPx, containerRef.clientHeight, getComputedStyle(collapseRef).maxHeight, parseInt(collapseRef.offsetHeight), collapseId)

                setShowCollapse(show)
            }
        }

    }, [collapseRef, windowHeight, windowWidth, maxVhOfCollapse, containerRef, dependency])

    useEffect(() => {
        if (collapseRef) {
            showRemainingContents(false)
            //debugging
            // console.log("test")
        }
    }, [showCollapse, collapseRef, showRemainingContents])

    //end of (1)

    //this is to make sure everything is loaded for the collapse to work perfectly
    if (!containerRef || !collapseRef) {
        //to avoid many re-renders
        setTimeout(() => setChange(change ? 0 : 1), 500)
    }

    //make sure collapseRef works before showing or else the buttons wont respond because collapseref didnt even load
    return (
        <>
            {collapseRef && showCollapse && containerRef ?
                <>
                    <PreviewCollapseButton
                        showCollapseButton={showCollapseButton}
                        showRemainingContents={showRemainingContents}
                        collapseId={collapseId}
                        text={text}
                    />
                </>
                :
                <>
                </>
            }
        </>
    )
}
