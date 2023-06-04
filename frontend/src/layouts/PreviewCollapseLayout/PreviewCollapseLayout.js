//react
import React, { useCallback, useEffect, useState } from 'react';

//hooks
import useWindowSizeManager from '../../hooks/useWindowSizeManager';

//components
import { PreviewCollapseButton } from './components'

//utils
import * as measurements from '../../utils/measurements'

export default function PreviewCollapseLayout(props) {

    //here is what this semi component needs
    const {
        children,
        id,
        previewVh,
        text,
        dependency,
    } = props

    const collapseId = "preview-collapse-" + id

    const { windowWidth, windowHeight } = useWindowSizeManager()
    const [showCollapseButton, setShowCollapseButton] = useState(false)
    const [showCollapse, setShowCollapse] = useState(true)
    const [change, setChange] = useState(0)

    const collapseRef = document.getElementById(collapseId)
    const containerRef = collapseRef ? collapseRef.children[0] : null
    const overflow = "hidden"

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
                collapseRef.style.maxHeight = previewVh.toString() + "vh"
                setShowCollapseButton(false)
            }
        }
    }, [setShowCollapseButton, collapseRef, overflow, previewVh])

    //start of (1): side effects of window sizes changing
    useEffect(() => {

        if (collapseRef) {
            if (containerRef) {

                const vhToPx = measurements.viewSizeToPx(previewVh, windowHeight)
                //vh following how much you give to the container at the bottom 
                const show = vhToPx < containerRef.clientHeight

                //debugging, the container in px, parentcontainer in px, and parentcontainer in px int
                // console.log(vhToPx, containerRef.clientHeight, getComputedStyle(collapseRef).maxHeight, parseInt(collapseRef.offsetHeight), collapseId)

                setShowCollapse(show)
            }
        }

    }, [collapseRef, windowHeight, windowWidth, previewVh, containerRef, dependency])

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
        <div className="" style={{ position: "relative" }}>
            <div
                id={collapseId}
                style={{ maxHeight: previewVh.toString() + "vh", overflow: overflow }}
            >
                {children}
            </div>
            {/* it's also flexible to decide when to show these elements, custom function, not req for the elements to work*/}
            {collapseRef && showCollapse && containerRef ?
                <>
                    <PreviewCollapseButton
                        collapseId={collapseId}
                        showCollapseButton={showCollapseButton}
                        showRemainingContents={showRemainingContents}
                        text={text}
                    />
                </>
                :
                <>
                </>
            }
        </div>
    )
}