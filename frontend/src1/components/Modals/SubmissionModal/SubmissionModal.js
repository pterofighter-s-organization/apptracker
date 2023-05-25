//components
import { SubmissionErrorModal, SubmissionSuccessModal } from "./components"

export default function SubmissionModal(props){

    const {
        id,
        showSuccessModal,
        successMsg,
        errorMsg,
        closeModal,
    } = props

    //we have to make sure both content is under one id, because switching between 2 different id modals can glitch
    
    return (
        <div className="modal fade" id={id} tabindex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    {showSuccessModal ?
                        <SubmissionSuccessModal
                            message={successMsg}
                            closeModal={closeModal}
                        />
                        :
                        <SubmissionErrorModal
                            message={errorMsg}
                            closeModal={closeModal}
                        />
                    }
                </div>
            </div>
        </div>
    )
}