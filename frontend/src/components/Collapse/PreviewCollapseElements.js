//react
import React, { useEffect, useState } from 'react';

//css
import "./PreviewCollapse.css"

//helper
import { showRemainingContent, checkShowCollapse } from "./PreviewCollapseHelper.js"

//hooks
import useWindowSizeManager from "../../hooks/useWindowSizeManager.js"

//a semi-component, need to pair with a container
//because I want to leave flexibility for how the container weights in height and width
//example on how to build a preview collapse at the very bottom 
export default function PreviewCollapseElements(props) {

    //this component must be pair with a collapse container
    //elements like button and the blur background
    //the buttons, and the background to activate the collapse

    //here is what this semi component needs
    const {
        collapseId,
        text,
        overflow,
        dependency,
    } = props

    const { windowWidth, windowHeight } = useWindowSizeManager()
    const [showCollapse, setShowCollapse] = useState(true)
    const [maxCollapseHeight, setMaxCollapseHeight] = useState(0)
    const collapseRef = document.getElementById(collapseId)

    const buttonId = collapseId + '-button'
    const backgroundId = collapseId + '-background'

    useEffect(() => {

        if (collapseRef) {
            setMaxCollapseHeight(parseInt(collapseRef.offsetHeight))
        }

    }, [collapseRef, windowHeight])

    //side effects of window sizes changing
    useEffect(() => {

        if (collapseRef) {
            const containerRef = collapseRef.children[0]
            if (containerRef) {
                //vh following how much you give to the container at the bottom 
                const show = checkShowCollapse(containerRef.clientHeight, maxCollapseHeight)

                //debugging, the container in px, parentcontainer in px, and parentcontainer in px int
                // console.log(containerRef.clientHeight, getComputedStyle(collapseRef).maxHeight,parseInt(collapseRef.offsetHeight))

                setShowCollapse(show)
            }
        }
    }, [collapseRef, windowHeight, windowWidth, maxCollapseHeight, dependency])

    useEffect(() => {
        //little cleanup function
        //to avoid unexpected behaviours when show changed and these never got reseted

        const background = document.getElementById(backgroundId)
        const button = document.getElementById(buttonId)

        if (collapseRef && button && background) {

            const text = button.getAttribute('data-text')
            button.innerHTML = "Show All " + text
            button.setAttribute('aria-expanded', false)
            collapseRef.style.overflow = overflow
            collapseRef.style.maxHeight = maxCollapseHeight + "px"
            background.style.display = "" //shows it
            button.style.position = "absolute"
            button.style.marginTop = "0px"
            button.style.bottom = "50px"
            
            // console.log(parseInt(collapseRef.offsetHeight), maxCollapseHeight, "debugging")
        }

    }, [showCollapse, collapseRef, backgroundId, buttonId, overflow, maxCollapseHeight])

    return (
        <>
            {showCollapse ?
                <>
                    <div
                        className="blur-bg w-100"
                        style={{ position: "absolute", bottom: "0px", height: "15vh" }}
                        id={backgroundId}
                    />
                    <div className="d-flex justify-content-center">
                        <button
                            className="btn btn-primary p-3 px-5" type="button" onClick={() => {
                                showRemainingContent(collapseId, maxCollapseHeight, overflow)
                            }}
                            aria-expanded="false"
                            data-text={text}
                            id={buttonId}
                            style={{ position: "absolute", bottom: "50px" }}
                        >
                            Show All {text}
                        </button>
                    </div>
                </>
                :
                <></>
            }
        </>
    )
}

//EXAMPLE of a preivew collapse with container to put the item
/* <div style={{ position: "relative" }}>
    <div
        id="collapse-tasks"
        style={{ maxHeight: taskVh.toString() + "vh", overflow: "hidden" }}
    >
        <div
            className="table-responsive"
            id="dashboard-tasks"
        >
            <TaskTable
                tasks={tasks}
            />
        </div>
    </div>
    <PreviewCollapseElements
        text={"Tasks"}
        collapseId={"collapse-tasks"}
        overflow={"hidden"}
        dependency={tasks}
    />
</div> */