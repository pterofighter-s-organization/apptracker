import { Link } from "react-router-dom"

export default function SubmissionLinkModal(props) {

    const {
        header,
        message,
        closeMessage,
        buttonLinkLabel,
        link,
        closeModal,
        id
    } = props

    return (
        <div className="modal fade" id={id} tabindex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5">
                            {header}
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
                    <div className="modal-body">
                        {message}
                    </div>
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
                            {closeMessage}
                        </button>
                        <Link
                            onClick={
                                (e) => {
                                    closeModal()
                                }
                            }
                            to={link}
                            className="btn btn-primary px-3 py-2"
                        >
                            <div className="">
                                {buttonLinkLabel}
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}