import { Link } from "react-router-dom";


export default function NavButton({ icon, text, show }) {


    return (
        <Link
            type="button"
            className="btn btn-outline-primary text-light d-flex flex-row align-items-center gap-3 w-100 p-3"
            style={{ border: "none" }}
        >
            {show ?
                <>
                    <i
                        className={`bi bi-${icon}`}
                        style={{ fontSize: "1.5rem" }}
                    />
                    <div className={`lead`} style={{}}>
                        {text}
                    </div>
                </>
                :
                <i
                    className={`bi bi-${icon} mx-auto`}
                    style={{ fontSize: "1.5rem" }}
                />
            }
        </Link>
    )
}