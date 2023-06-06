
export default function ModalLayout({ children, modalId }) {

    return (
        <div className="modal fade" id={modalId} tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>
    )
}