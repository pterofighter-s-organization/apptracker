
export default function TextInput({ value, updateValue }) {

    function changeInput(event) {
        // console.log(event.target.value);
        event.preventDefault()
        const newValue = event.target.value
        updateValue(newValue)
    }

    return (
        <input
            type="text"
            value={value}
            placeholder={"Enter text"}
            className={`form-control p-3 bg-body`}
            onChange={(e) => changeInput(e)}
        />
    )
}