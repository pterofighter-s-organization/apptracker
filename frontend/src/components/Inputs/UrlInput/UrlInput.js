
export default function UrlInput({ value, updateValue }) {

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
            placeholder={"http://www.sampledoc123/edit"}
            className={`form-control p-3 bg-body`}
            onChange={(e) => changeInput(e)}
        />
    )
}