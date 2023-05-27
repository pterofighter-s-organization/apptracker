
export default function TextAreaInput({ formData, setFormData, label }) {

    function changeInput(event) {
        // console.log(event.target.value);
        event.preventDefault()
        const newText = event.target.value
        setFormData(prevFormData => ({ ...prevFormData, [label]: newText }))
    }

    // const multiLineTextBox = useRef(null)

    const placeholderText = `Multi-line text`

    return (
        <>
            <textarea
                value={formData[label]}
                // ref={multiLineTextBox}
                className={`form-control p-3 bg-transparent border-0`}
                style={{ overflow: "auto", height: "100%", resize: "none" }}
                onChange={(e) => {
                    changeInput(e)
                }}
                placeholder={placeholderText}
            >
                {formData[label]}
            </textarea>
        </>
    )
}