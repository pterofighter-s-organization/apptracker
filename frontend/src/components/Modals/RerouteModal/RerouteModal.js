//components
import { RerouteErrorModalContent, RerouteSuccessModalContent } from "./components"

export default function RerouteModal(props) {

    const {
        id,
        showSuccessModal,
        successMsg,
        errorMsg,
        buttonLabel,
        closeModal,
        route
    } = props

    //we have to make sure both content is under one id, because switching between 2 different id modals can glitch

    return (
        <div className="modal fade" id={id} tabindex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    {showSuccessModal ?
                        <RerouteSuccessModalContent
                            message={successMsg}
                            closeModal={closeModal}
                            buttonLabel={buttonLabel}
                            route={route}
                        />
                        :
                        <RerouteErrorModalContent
                            message={errorMsg}
                            closeModal={closeModal}
                        />
                    }
                </div>
            </div>
        </div>
    )

}