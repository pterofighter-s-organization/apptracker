import { useEffect, useRef } from "react";


export default function MultiLineTextBox(props) {

    const {
        formData,
        setFormData,
        label,
        fontSize,
    } = props;

    function changeTextInput(event) {
        // console.log(event.target.value);
        event.preventDefault()
        const newText = event.target.value
        setFormData(prevFormData => ({ ...prevFormData, [label]: newText }))
    }

    const multiLineTextBox = useRef(null)

    useEffect(() => {
        if (multiLineTextBox) {
            const { scrollHeight } = multiLineTextBox.current;
            multiLineTextBox.current.style.height = "auto"
            multiLineTextBox.current.style.height = `${scrollHeight}px`;
        }
    }, [multiLineTextBox])

    const placeholderText = `Multi-line text`

    return (
        <>
            <textarea
                value={formData[label]}
                ref={multiLineTextBox}
                className={`form-control p-3 bg-body ${fontSize}`}
                style={{ overflow: "auto", height: "100%", resize: "none" }}
                onChange={(e) => {
                    changeTextInput(e)
                }}
                placeholder={placeholderText}
            >
                {formData[label]}
            </textarea>
        </>
    )

}