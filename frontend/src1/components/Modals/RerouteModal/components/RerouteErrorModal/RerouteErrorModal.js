
export default function RerouteErrorModal({ message, closeModal }) {

    return (
        <>
            {/* header */}
            <div className="modal-header">
                <h1 className="modal-title fs-5">
                    Warning!
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
            </div>
        </>
    )
}