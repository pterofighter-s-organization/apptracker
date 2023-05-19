//components
import SubmissionErrorModal from "./components/SubmissionErrorModal"
import SubmissionSuccessModal from "./components/SubmissionSuccessModal"


export default function SubmissionModals(props){

    const {
        id,
        showSuccessModal,
        successMsg,
        errorMsg,
        closeModal,
    } = props

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