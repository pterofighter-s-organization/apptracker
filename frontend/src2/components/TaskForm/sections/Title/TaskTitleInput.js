import TextField from "../../../Inputs/Text/TextField";



export default function TaskTitleInput(props) {

    const {
        formData,
        setFormData,
        fontSize,
        errorMsgs
    } = props;

    return (
        <div className="d-flex flex-column gap-3" style={{ minWidth: "40vw", width: "680px", maxWidth: "100vw" }}>
            <TextField
                formData={formData}
                setFormData={setFormData}
                errorMsgs={errorMsgs}
                header={"Task title *"}
                footer={"Enter the name for your task"}
                label={"title"}
                fontSize={fontSize}
            />
        </div>
    )
}