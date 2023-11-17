import { useState } from "react"
import { useParams } from "react-router-dom";

export default function withStatusControl(Component) {
    function StatusControl({ ...props }) {
        
        const [status, setStatus] = useState((useParams().status === "archived") ? "archived" : "active")

        const handleStatus = (e, option) => {
            e.preventDefault()
            setStatus(option)
        }

        return (
            <Component
                status={status}
                handleStatus={handleStatus}
                {...props}
            />
        )
    }
    return StatusControl
}