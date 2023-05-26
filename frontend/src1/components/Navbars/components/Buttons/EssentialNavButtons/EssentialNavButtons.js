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
                tooltiplabel={"place to see all apps and tasks"}
            />
            <NavButton
                icon={"pin-angle"}
                label={"Interested Apps"}
                showLabel={showLabel}
                route={"/"}
                tooltiplabel={"showLabels all apps labeled as interested"}
            />
            <NavButton
                icon={"plus-circle"}
                label={"New App"}
                showLabel={showLabel}
                route={"/application/new"}
                tooltiplabel={"you can click here to track a new app"}
            />
            <NavButton
                icon={"person-circle"}
                label={"My Account"}
                showLabel={showLabel}
                route={"/"}
                tooltiplabel={"Can see resume and everything about your account"}
            />
        </>
    )
}