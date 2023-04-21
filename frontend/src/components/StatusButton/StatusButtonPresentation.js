
export default function StatusButtonPresentation({ text, color, id , checked, name}) {
    return (
        <>
        {checked ? (
            <input type="radio" class="btn-check" name={`btnradio${name}`} id={`btnradio${id}`} autocomplete="off" checked/>
        ):(
            <input type="radio" class="btn-check" name={`btnradio${name}`} id={`btnradio${id}`} autocomplete="off"/>
        )}
        <button type="button" className={`btn btn-outline-${color}`} for={`btnradio${name}${id}`}>
            <div className="">
                {text}
            </div>
        </button>
        </>
        )
}