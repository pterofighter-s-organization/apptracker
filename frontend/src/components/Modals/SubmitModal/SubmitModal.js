
//components
import { SubmitSuccessModalContent, SubmitErrorModalContent } from "./components";

//layout
import { ModalLayout } from "../layout";

export default function SubmitModal(props) {

    const {
        modalId, 
        messages, 
        closeModal, 
        showSuccessModal 
    } = props
    return(
        <ModalLayout modalId={modalId}>
            {showSuccessModal ?
                <SubmitSuccessModalContent
                    message={messages.success}
                    closeModal={closeModal}
                />
                :
                <SubmitErrorModalContent
                    message={messages.error}
                    closeModal={closeModal}
                />
            }
        </ModalLayout>
    )
}