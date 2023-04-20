
export default function StatusButtonPresentation({ text, color }) {
    return (
        <button type="button" className={`btn btn-outline-${color}`}>
            <div className="">
                {text}
            </div>
        </button>
    )
}