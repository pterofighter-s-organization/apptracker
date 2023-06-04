

export default function Textbox(props) {

    const {
        text,
        setText,
        textError,
        textHint,
        fontSize
    } = props

    function checkTextInput(event) {
        // console.log(event.target.value);
        setText(event.target.value);
    }

    return (
        <>
            <input type="text" value={text} className={`form-control p-3 bg-body ${fontSize}`} onChange={(e) => checkTextInput(e)} />
            {textError && textError.length > 0 ?
                <div className={`blockquote-footer text-danger mt-1 ${fontSize}`}>
                    {textError}
                </div>
                :
                <div className={`blockquote-footer mt-1 ${fontSize}`}>
                    {textHint}
                </div>
            }
        </>
    )
}