

//components
import { NavButton } from "../NavButton"

export default function PinnedAppButton({ showLabel, minimizeMenu }) {

    return (
        <NavButton
            icon={"pin-angle"}
            label={"Interested Apps"}
            showLabel={showLabel}
            minimizeMenu={minimizeMenu}
            route={"/pinned-applications"}
            tooltipText={"show all apps labeled as interested"}
        />
    )
}