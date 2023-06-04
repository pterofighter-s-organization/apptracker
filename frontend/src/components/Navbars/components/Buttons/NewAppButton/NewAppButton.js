
//components
import { NavButton } from "../NavButton"

export default function NewAppButton({ showLabel, minimizeMenu }) {

    return (
        <NavButton
            icon={"plus-circle"}
            label={"New App"}
            showLabel={showLabel}
            minimizeMenu={minimizeMenu}
            route={"/application/new/interested"}
            tooltipText={"you can click here to track a new app"}
        />
    )
}