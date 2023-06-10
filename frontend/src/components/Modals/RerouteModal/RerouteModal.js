
//components
import { RerouteErrorModalContent, RerouteSuccessModalContent } from "./components"

//layout
import { ModalLayout } from "../layout"

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