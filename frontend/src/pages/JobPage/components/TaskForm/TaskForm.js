
//components
import { CreateButton } from "../../../../components/Buttons/CreateButton"
import { DateTimeInput } from "../../../../components/Inputs/DateTimeInput"
import { InputFooter } from "../../../../components/Inputs/InputFooter"
import { TextInput } from "../../../../components/Inputs/TextInput"

//layouts
import { InputLayout } from "../../../../layouts/InputLayout"

//css
import "./TaskForm.css"

export default function TaskForm({ formData, handleChange, handleCreate }) {

    return (
        <div className="task-form-container">
            <form className="task-form">
                <InputLayout isError={formData.name.error.length > 0} >
                    <TextInput
                        name={"name"}
                        value={formData.name.value}
                        handleChange={handleChange}
                    />
                    <InputFooter
                        footer={"task name"}
                        errorMessage={formData.name.error}
                    />
                </InputLayout>
                <InputLayout isError={formData.dateDue.error.length > 0}>
                    <DateTimeInput
                        name={"dateDue"}
                        value={formData.dateDue.value}
                        handleChange={handleChange}
                    />
                    <InputFooter
                        footer={"due date"}
                        errorMessage={formData.dateDue.error}
                    />
                </InputLayout>
            </form>
            <CreateButton
                handleCreate={handleCreate}
                label={"task"}
            />
        </div>
    )
}