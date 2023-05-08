import NavButton from "./Button/NavButton";

export default function NavbarElements({ show }) {

    return (
        <>
            <NavButton
                icon={"house"}
                text={"Dashboard"}
                show={show}
                link={"/e"}
                tooltipText={"central place to see all apps and tasks"}
            />
            <NavButton
                icon={"pin-angle"}
                text={"Interested Apps"}
                show={show}
                link={"/"}
                tooltipText={"shows all apps labeled as interested"}
            />
            <NavButton
                icon={"plus-circle"}
                text={"New App"}
                show={show}
                link={"/"}
                tooltipText={"you can click here to track a new app"}
            />
            <NavButton
                icon={"person-circle"}
                text={"My Account"}
                show={show}
                link={"/"}
                tooltipText={"Can see resume and everything about your account"}
            />
        </>
    )
}