import { useEffect, useRef } from "react"

//hooks
import useWindowSizeManager from "../../../../hooks/useWindowSizeManager";

export default function MultiLineTextBox(props) {

    const {
        formData,
        setFormData,
        label,
        fontSize,
    } = props;

    const { windowWidth, windowHeight } = useWindowSizeManager()
    const multiLineTextBox = useRef(null)

    function changeTextInput(event) {
        // console.log(event.target.value);
        event.preventDefault()
        const newText = event.target.value
        setFormData(prevFormData => ({ ...prevFormData, [label]: newText }))
        const { scrollHeight } = multiLineTextBox.current;
        multiLineTextBox.current.style.height = "auto"
        multiLineTextBox.current.style.height = `${scrollHeight}px`;
    }

    useEffect(() => {
        if (multiLineTextBox) {
            const { scrollHeight } = multiLineTextBox.current;
            multiLineTextBox.current.style.height = "auto"
            multiLineTextBox.current.style.height = `${scrollHeight}px`;
        }
    }, [multiLineTextBox, windowHeight, windowWidth])

    const placeholderText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

    return (
        <>
            <textarea
                value={formData[label]}
                ref={multiLineTextBox}
                className={`form-control p-3 bg-body ${fontSize}`}
                style={{ overflow: "auto", maxHeight: "50vh" }}
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