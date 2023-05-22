import { Link } from "react-router-dom"


export default function SubmittedModal(props) {

    const {
        link,
        linkButtonLabel,
        showSecondButton,
        status,
        setStatus,
        id,
        errorMsg,
        successMsg,
    } = props

    function resetStatus (event){
        event.preventDefault()
        setTimeout(() => setStatus(false), 200)
    }

    return (
        <div className="modal fade" id={id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    {status ?
                        <>
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">
                                    Successful!
                                </h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={(e) => resetStatus(e)}></button>
                            </div>
                            <div className="modal-body">
                                {successMsg}
                            </div>
                        </>
                        :
                        <>
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">
                                    Warning!
                                </h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={(e) => resetStatus(e)}></button>
                            </div>
                            <div className="modal-body">
                                {errorMsg}
                            </div>
                        </>
                    }
                    {showSecondButton ?
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={(e) => resetStatus(e)}>Close</button>
                            <Link to={link} className="btn btn-primary px-3 py-2" onClick={(e) => resetStatus(e)}>
                                <div className="">
                                    {linkButtonLabel}
                                </div>
                            </Link>
                        </div>
                        :
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={(e) => resetStatus(e)}>Close</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}