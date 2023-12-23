

//css
import "./LoadingDisplay.css"

export default function LoadingDisplay({ height }) {

    return (
        <div
            className="loading-display-layout"
            style={{ height: height || "25rem" }}
        >
            <div className="loading-icon" />
        </div>
    )
}