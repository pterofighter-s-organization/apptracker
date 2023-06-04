//buttons
import { NavButton } from "../NavButton"
import { PinnedAppButton } from "../PinnedAppButton"

export default function EssentialNavButtons({ showLabel, minimizeMenu }) {

    return (
        <>
            <NavButton
                icon={"house"}
                label={"Dashboard"}
                showLabel={showLabel}
                minimizeMenu={minimizeMenu}
                route={"/"}
                tooltipText={"place to see all apps and tasks"}
            />
            <PinnedAppButton
                showLabel={showLabel}
                minimizeMenu={minimizeMenu}
            />
            <NavButton
                icon={"archive"}
                label={"Archived"}
                showLabel={showLabel}
                minimizeMenu={minimizeMenu}
                route={"/archived-board"}
                tooltipText={"show all apps labeled as archived"}
            />
            {/* <NavButton
                icon={"person-circle"}
                label={"My Account"}
                showLabel={showLabel}
                route={"/"}
                tooltipText={"Can see resume and everything about your account"}
            /> */}
        </>
    )
}