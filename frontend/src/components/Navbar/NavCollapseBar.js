import { useState } from "react";

//components
import NavLogUserButton from "./Button/NavLogUserButton";
import NavMenuButton from "./Button/NavMenuButton";
import NavButton from "./Button/NavButton";
import NavbarElements from "./NavbarElements";


export default function NavCollapseBar() {

    const [showFullNav, setShowFullNav] = useState(false)
    function handleChangeMenu(request) {
        if (request === "minimize") {
            setShowFullNav(false)
        } else if (request === "expand") {
            setShowFullNav(true)
        }
    }

    return (
        <nav
            className=""
            style={{ backgroundColor: "#2C4096", padding: "1.25vw 1.25vw" }}
        >
            <div className="">
                {showFullNav ?
                    <div className="py-3">
                        <NavMenuButton
                            show={true}
                            handleChangeMenu={handleChangeMenu}
                        />
                        <div className="my-3 d-flex flex-column">
                            <NavbarElements show={showFullNav} />
                        </div>
                        <NavLogUserButton show={true} />
                    </div>
                    :
                    <div className="d-flex flex-row gap-3">
                        <div className="">
                            <NavMenuButton
                                show={false}
                                handleChangeMenu={handleChangeMenu}
                            />
                        </div>
                        <div className="d-flex flex-row ms-auto">
                            <NavButton
                                icon={"plus-circle"}
                                text={"New App"}
                                show={false}
                                link={"/"}
                                tooltipText={"you can click here to track a new app"}
                            />
                            <NavLogUserButton show={false} />
                        </div>
                    </div>
                }
            </div>
        </nav>
    )
}