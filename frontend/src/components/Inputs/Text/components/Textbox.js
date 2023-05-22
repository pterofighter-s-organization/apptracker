
export default function TextBox(props) {

    const {
        formData,
        setFormData,
        label,
        fontSize,
    } = props

    function changeTextInput(event) {
        // console.log(event.target.value);
        event.preventDefault()
        const newText = event.target.value
        setFormData(prevFormData => ({ ...prevFormData, [label]: newText }))
    }

    return (
        <input
            type="text"
            value={formData[label]}
            placeholder={"text"}
            className={`form-control p-3 bg-body ${fontSize}`}
            onChange={(e) => changeTextInput(e)}
        />
    )
}