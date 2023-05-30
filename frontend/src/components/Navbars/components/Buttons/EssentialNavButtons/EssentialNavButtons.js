//buttons
import { NavButton } from "../NavButton"

export default function EssentialNavButtons({ showLabel }) {

    return (
        <>
            <NavButton
                icon={"house"}
                label={"Dashboard"}
                showLabel={showLabel}
                route={"/"}
                tooltipText={"place to see all apps and tasks"}
            />
            <NavButton
                icon={"pin-angle"}
                label={"Interested Apps"}
                showLabel={showLabel}
                route={"/"}
                tooltipText={"showLabels all apps labeled as interested"}
            />
            <NavButton
                icon={"plus-circle"}
                label={"New App"}
                showLabel={showLabel}
                route={"/application/new"}
                tooltipText={"you can click here to track a new app"}
            />
            <NavButton
                icon={"person-circle"}
                label={"My Account"}
                showLabel={showLabel}
                route={"/"}
                tooltipText={"Can see resume and everything about your account"}
            />
        </>
    )
}