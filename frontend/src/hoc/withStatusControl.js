import { useState } from "react"
import { useParams } from "react-router-dom";

export default function withStatusControl(Component) {
    function StatusControl({ ...props }) {
        const { givenStatus } = useParams()
        const [status, setStatus] = useState((givenStatus === "archived") ? "archived": "active")
        // console.log(location)

        const handleStatus = (e, option) => {
            e.preventDefault()
            setStatus(option)
        }

        return <Component
            status={status}
            handleStatus={handleStatus}
            {...props}
        />
    }
    return StatusControl
}