

export default function ConfidentialInput({ value, updateValue, label }) {

    function changeInput(event) {
        // console.log(event.target.value);
        event.preventDefault()
        const newValue = event.target.value
        updateValue(newValue)
    }

    function toggleVisibility(event){
        //event.preventDefault() dont set default because it will disallow its default checking box action
        const textboxElement = document.getElementById(label)
        textboxElement.type = (textboxElement.type === "password") ? "text": "password"
    }
    

    return (
        <>
            <input
                type="password"
                id={label}
                value={value}
                placeholder={`Enter ${(label) ? label : "text"}`}
                className={`form-control p-3 bg-body`}
                onChange={(e) => changeInput(e)}
            />
            <div className="d-flex flex-row gap-3 ms-1">
                <input 
                    type="checkbox" 
                    style={{transform: "scale(1.5)"}} 
                    className="form-check-input"
                    onClick={((e) => toggleVisibility(e))} 
                />
                <div className="" style={{textTransform: ""}}>
                    Show {label}
                </div>
            </div>
        </>
    )
}