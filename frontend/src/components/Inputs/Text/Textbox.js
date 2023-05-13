

export default function Textbox(props) {

    const {
        formData,
        setFormData,
        fontSize,
    } = props

    function checkTextInput(event) {
        // console.log(event.target.value);
        event.preventDefault()
        const newText = event.target.value
        setFormData(prevFormData => ({ ...prevFormData, "text": newText }))
    }

    return (
        <>
            <input 
                type="text" 
                value={formData.text} 
                className={`form-control p-3 bg-body ${fontSize}`} 
                onChange={(e) => checkTextInput(e)} 
            />
        </>
    )
}