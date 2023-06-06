
//css
import "../NavButton.css"

export default function MenuNavButton ({ showLabel, handleChangeMenu }) {

    return (
        <>
            {showLabel ?
                <button
                    type="button"
                    className="btn btn-outline-primary text-light d-flex flex-row align-items-center gap-3 w-100 p-3"
                    style={{ border: "none" }}
                    onClick={(e) => {
                        e.preventDefault()
                        handleChangeMenu("minimize")
                    }}
                    id="nav-tooltip"
                    data-bs-toggle="tooltip" data-bs-placement="right" title={"Closes the menu"}
                >
                    <i
                        className={`bi bi-x-lg`}
                        style={{ fontSize: "1.5rem" }}
                    />
                    <div className={`lead`} style={{ display: "" }}>
                        Close menu
                    </div>
                </button>
                :
                <button
                    type="button"
                    className="btn btn-outline-primary text-light d-flex flex-row align-items-center gap-3 w-100 p-2"
                    style={{ border: "none" }}
                    onClick={(e) => (handleChangeMenu("expand"))}
                    id="nav-tooltip"
                    data-bs-toggle="tooltip" data-bs-placement="right" title={"Expands the menu"}
                >
                    <i
                        className={`bi bi-list mx-auto`}
                        style={{ fontSize: "2rem" }}
                    />
                </button>
            }
        </>
    )
}