
//components
import { TooltipText } from "../../TooltipText"
import { LoadingDisplay } from "../../Displays/LoadingDisplay"
import { TextareaInput } from "../TextareaInput"

//css
import "./EditableTextInput.css"

export default function EditableTextInput({ isArchived, isEditing, height, value, ...props }) {

    if(isEditing){
        return <LoadingDisplay height={height}/>
    }

    return (
        <div
            className="editable-text-input"
            style={{
                height: height || ""
            }}
        >
            {
                isArchived ?
                    <>
                        <TooltipText
                            text={"Please restore to edit."}
                        />
                        <pre className="display-text">
                            {
                                value.length > 0 ?
                                    value
                                    :
                                    "Please restore to edit."
                            }
                        </pre>
                    </>
                    :
                    <>
                        <TooltipText
                            text={"Click to edit."}
                        />
                        <TextareaInput
                            height={height}
                            value={value}
                            placeholder={"Click to edit."}
                            {...props}
                        />
                    </>
            }
        </div>
    )
}