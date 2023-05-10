

export default function Textbox(props) {

    const {
        id,
        text,
        setText,
        textError,
        textHint,
        fontSize
    } = props

    function checkTextInput(event) {
        console.log(event.target.value);
        setText(event.target.value);
    }

    return (
        <>
            <input type="text" className={`form-control p-3 bg-body ${fontSize}`} id={id} onChange={(e) => checkTextInput(e)} />
            {textError && textError.length > 0 ?
                <div class={`blockquote-footer text-danger mt-1 ${fontSize}`}>
                    {textError}
                </div>
                :
                <div class={`blockquote-footer mt-1 ${fontSize}`}>
                    {textHint}
                </div>
            }
        </>
    )
}