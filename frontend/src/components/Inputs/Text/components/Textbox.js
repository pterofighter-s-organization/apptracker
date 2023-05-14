

export default function Textbox(props) {

    const {
        formData,
        setFormData,
        fontSize,
        label
    } = props

    function checkTextInput(event) {
        // console.log(event.target.value);
        event.preventDefault()
        const newText = event.target.value
        setFormData(prevFormData => ({ ...prevFormData, [label]: newText }))
    }

    return (
        <>
            <input 
                type="text" 
                value={formData[label]} 
                className={`form-control p-3 bg-body ${fontSize}`} 
                onChange={(e) => checkTextInput(e)} 
            />
        </>
    )
}