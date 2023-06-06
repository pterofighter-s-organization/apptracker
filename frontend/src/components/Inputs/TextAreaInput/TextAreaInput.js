//utils
// import { debounce } from "../../../utils/debounce"

export default function TextAreaInput({ value, updateValue }) {

    function changeInput(event) {
        // console.log(event.target.value);
        event.preventDefault()
        const newValue = event.target.value
        updateValue(newValue)
    }

    // const multiLineTextBox = useRef(null)

    const placeholderText = `Multi-line text`

    return (
        <>
            <textarea
                value={value}
                // ref={multiLineTextBox}
                //a flex-grow-1 to make sure it follow its parents height. Parent must be a d-flex
                className={`form-control p-3 bg-transparent border-0 flex-grow-1`}
                style={{ overflow: "auto", height: "100%", resize: "none" }}
                onChange={(e) => {
                    // debounce(changeInput(e), 0)
                    changeInput(e)
                }}
                placeholder={placeholderText}
            >
                {value}
            </textarea>
        </>
    )
}