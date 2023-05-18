import { useEffect } from "react"

//hooks
import useWindowSizeManager from "../../../../../../../hooks/useWindowSizeManager";


export default function DescriptionBox(props) {

    const {
        formData,
        setFormData,
        fontSize,
    } = props

    const label = "description"
    const textarea = document.getElementById('description');
    const { windowWidth, windowHeight } = useWindowSizeManager()
    //add window size manager here

    function changeTextInput(event) {
        // console.log(event.target.value);
        event.preventDefault()
        const newText = event.target.value
        setFormData(prevFormData => ({ ...prevFormData, [label]: newText }))
        const textarea = document.getElementById('description');
        textarea.style.height = 'auto'; // Reset the height to auto to recalculate the scroll height
        textarea.style.height = `${textarea.scrollHeight}px`; // Set the height to the scroll height
    }

    useEffect(() => {
        if (textarea) {
            textarea.style.height = 'auto'; // Reset the height to auto to recalculate the scroll height
            textarea.style.height = `${textarea.scrollHeight}px`; // Set the height to the scroll height
        }
    }, [textarea, windowHeight, windowWidth]);

    return (
        <textarea
            value={formData[label]}
            id="description"
            className={`form-control p-3 bg-body ${fontSize}`}
            style={{ overflow: "hidden", resize: "none", minHeight: "30vh" }}
            onChange={(e) => {
                changeTextInput(e)
            }}
        >
            {formData[label]}
        </textarea>
    )
}