import NavButton from "./Button/NavButton";


export default function NavbarElements({ show }) {

    return (
        <>
            <NavButton
                icon={"house"}
                text={"Dashboard"}
                show={show}
                link={"/e"}
            />
            <NavButton
                icon={"pin-angle"}
                text={"Interested Apps"}
                show={show}
                link={"/"}
            />
            <NavButton
                icon={"plus-circle"}
                text={"New App"}
                show={show}
                link={"/"}
            />
            <NavButton
                icon={"person-circle"}
                text={"My Account"}
                show={show}
                link={"/"}
            />
        </>
    )
}