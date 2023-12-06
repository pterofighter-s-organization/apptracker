

//css
import "./ReturnButton.css"

export default function ReturnButton({ handleReturn, label }) {
    
    return (
        <button
            className="return-button"
            onClick={handleReturn}
        >
            Return to {label}
        </button>
    )
}