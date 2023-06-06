import { ModalLayout } from "../layout"
import { RerouteErrorModalContent, RerouteSuccessModalContent } from "./components"

export default function RerouteModal(props){

    const{
        modalId,
        messages,
        buttonLabel,
        route,
        closeModal,
        showSuccessModal
    } = props

    return(
        <ModalLayout modalId={modalId}>
            {showSuccessModal ?
                <RerouteSuccessModalContent
                    message={messages.success}
                    route={route}
                    buttonLabel={buttonLabel}
                    closeModal={closeModal}
                />
                :
                <RerouteErrorModalContent
                    message={messages.error}
                    closeModal={closeModal}
                />
            }
        </ModalLayout>
    )
}