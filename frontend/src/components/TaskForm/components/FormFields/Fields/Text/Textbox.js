

export default function Textbox(props) {

    const {
        text,
        handleChange,
        fontSize
    } = props

    function checkTextInput(event) {
        // console.log(event.target.value);
        event.preventDefault()
        handleChange(event.target.value)
    }

    return (
        <>
            <input type="text" value={text} className={`form-control p-3 bg-body ${fontSize}`} onChange={(e) => checkTextInput(e)} />
        </>
    )
}