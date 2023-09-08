

//reason why i don't put setforminput here because that function only use to modify key value data
//not all input passed in uses that currently

export default function TextInput({ value, updateValue, label }) {

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
            placeholder={`Enter ${(label) ? label : "text"}`}
            className={`form-control p-3 bg-body`}
            onChange={(e) => changeInput(e)}
        />
    )
}