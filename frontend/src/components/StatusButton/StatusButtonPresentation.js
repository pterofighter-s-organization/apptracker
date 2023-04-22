
export default function StatusButtonPresentation({ status, newStatus, color }) {
    return (
        <>
            <li>
                <button type="button" className={`dropdown-item text-${color}`} onClick={() => {
                    newStatus(status)
                }}>
                    {status}
                </button>
            </li>
        </>
        )
}