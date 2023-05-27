import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function RerouteSuccessModalContent(props) {

    const {
        message,
        buttonLabel,
        closeModal,
        route,
    } = props

    const [toReroute, setToReroute] = useState(false)
    const relocate = useNavigate()

    useEffect(() => {
        if(toReroute){
            relocate(route)
        }
    },[toReroute, relocate, route])

    return (
        <>
            {/* header */}
            <div className="modal-header">
                <h1 className="modal-title fs-5">
                    Successful!
                </h1>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    onClick={
                        (e) => {
                            e.preventDefault()
                            closeModal()
                        }
                    }
                ></button>
            </div>

            {/* body */}
            <div className="modal-body">
                {message}
            </div>

            {/* buttons */}
            <div className="modal-footer">
                <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={
                        (e) => {
                            e.preventDefault()
                            closeModal()
                        }
                    }
                >
                    Close
                </button>
                <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    onClick={
                        (e) => {
                            e.preventDefault()
                            setToReroute(true)
                            closeModal()
                        }
                    }
                >
                    {buttonLabel}
                </button>
            </div>
        </>
    )
}