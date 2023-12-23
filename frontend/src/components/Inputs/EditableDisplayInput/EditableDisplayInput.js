
//components
import { TooltipText } from "../../TooltipText"
import { LoadingDisplay } from "../../Displays/LoadingDisplay"
import { TextareaInput } from "../TextareaInput"

//css
import "./EditableDisplayInput.css"

export default function EditableDisplayInput({ isArchived, isEditing, height, value, ...props }) {

    if(isEditing){
        return <LoadingDisplay height={height}/>
    }

    return (
        <div
            className="editable-display-input"
            style={{
                height: height || ""
            }}
        >
            {
                isArchived ?
                    <>
                        <TooltipText
                            text={"Please restore this note to edit."}
                        />
                        <pre className="display-text">
                            {
                                value.length > 0 ?
                                    value
                                    :
                                    "Please restore this note to edit."
                            }
                        </pre>
                    </>
                    :
                    <>
                        <TooltipText
                            text={"Click to edit, it will save 1s after you finish editing."}
                        />
                        <TextareaInput
                            height={height}
                            value={value}
                            placeholder={"Click to edit, it will save 1s after you finish editing."}
                            {...props}
                        />
                    </>
            }
        </div>
    )
}