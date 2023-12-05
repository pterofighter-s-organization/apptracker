
//components
import { CreateButton } from "../../../../components/Buttons/CreateButton"
import { InputFooter } from "../../../../components/Inputs1/InputFooter"
import { TextInput } from "../../../../components/Inputs1/TextInput"

//layouts
import { InputLayout } from "../../../../layouts/InputLayout"

//css
import "./NoteForm.css"

export default function NoteForm({ formData, handleChange, handleCreate }) {

    return (
        <div className="note-form-container">
            <form className="note-form">
                <InputLayout isError={formData.note.error.length > 0}>
                    <TextInput
                        name={"note"}
                        value={formData.note.value}
                        handleChange={handleChange}
                    />
                    <InputFooter
                        footer={"type your note"}
                        errorMessage={formData.note.error}
                    />
                </InputLayout>
            </form>
            <CreateButton
                handleCreate={handleCreate}
                label={"note"}
            />
        </div>
    )
}