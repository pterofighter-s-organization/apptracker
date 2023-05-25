
export default function UrlInput({ formData, setFormData, label }) {

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
            placeholder={"http://www.sampledoc123/edit"}
            className={`form-control p-3 bg-body`}
            onChange={(e) => changeInput(e)}
        />
    )
}