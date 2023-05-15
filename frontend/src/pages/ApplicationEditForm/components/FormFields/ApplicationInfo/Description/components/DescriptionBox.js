



export default function DescriptionBox(props) {

    const {
        formData,
        setFormData,
        fontSize,
    } = props

    const label = "description"

    function changeTextInput(event) {
        // console.log(event.target.value);
        event.preventDefault()
        const newText = event.target.value
        setFormData(prevFormData => ({ ...prevFormData, [label]: newText }))
    }

    return (
        <textarea
            value={formData[label]}
            className={`form-text-area p-3 bg-body ${fontSize}`}
            onChange={(e) => {
                changeTextInput(e)
            }}
        >
        </textarea>
    )
}