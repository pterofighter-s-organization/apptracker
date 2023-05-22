

//components
import RerouteErrorModal from "./components/RerouteErrorModal"
import RerouteSuccessModal from "./components/RerouteSuccessModal"

export default function RerouteModal(props) {

    const {
        id,
        showSuccessModal,
        successMsg,
        errorMsg,
        buttonLabel,
        closeModal,
        address
    } = props

    return (
        <div className="modal fade" id={id} tabindex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    {showSuccessModal ?
                        <RerouteSuccessModal
                            message={successMsg}
                            closeModal={closeModal}
                            buttonLabel={buttonLabel}
                            address={address}
                        />
                        :
                        <RerouteErrorModal
                            message={errorMsg}
                            closeModal={closeModal}
                        />
                    }
                </div>
            </div>
        </div>
    )

}