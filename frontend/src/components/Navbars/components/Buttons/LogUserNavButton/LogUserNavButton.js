
import "../NavButton.css"

export default function LogUserNavButton({ showLabel }) {

    return (
        <>
            {showLabel ?
                <button
                    type="button"
                    className="btn btn-outline-primary text-light d-flex flex-row align-items-center gap-3 w-100 p-3"
                    style={{ border: "none" }}
                    id="nav-tooltip"
                    data-bs-toggle="tooltip" data-bs-placement="right" title={"Logs the user out"}
                >
                    <i
                        className={`bi bi-box-arrow-left`}
                        style={{ fontSize: "1.5rem" }}
                    />
                    <div className={`lead`} style={{ display: "" }}>
                        Log out
                    </div>
                </button>
                :
                <button
                    type="button"
                    className="btn btn-outline-primary text-light d-flex flex-row align-items-center gap-3 w-100 p-2"
                    id="nav-tooltip"
                    style={{ border: "none" }} title={"Logs the user out"}
                >
                    <i
                        className={`bi bi-box-arrow-left mx-auto`}
                        style={{ fontSize: "2rem" }}
                    />
                </button>
            }
        </>
    )
}