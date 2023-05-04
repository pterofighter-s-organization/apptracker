import NavButton from "./Button/NavButton";


export default function NavbarElements({ show }) {

    return (
        <>
            <NavButton
                icon={"house"}
                text={"Dashboard"}
                show={show}
            />
            <NavButton
                icon={"pin-angle"}
                text={"Interested Apps"}
                show={show}
            />
            <NavButton
                icon={"plus-circle"}
                text={"New App"}
                show={show}
            />
            <NavButton
                icon={"person-circle"}
                text={"My Account"}
                show={show}
            />
        </>
    )
}