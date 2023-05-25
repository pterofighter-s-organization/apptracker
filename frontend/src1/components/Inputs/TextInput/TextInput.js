
export default function TextInput({ formData, setFormData, label }) {

    function changeInput(event) {
        // console.log(event.target.value);
        event.preventDefault()
        const newText = event.target.value
        setFormData(prevFormData => ({ ...prevFormData, [label]: newText }))
    }

    return (
        <input
            type="text"
            value={formData[label]}
            placeholder={"text"}
            className={`form-control p-3 bg-body`}
            onChange={(e) => changeInput(e)}
        />
    )
}