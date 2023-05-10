import { useState } from "react"

//components
import Textbox from "./components/Textbox"
import Datebox from "./components/Datebox"
import Timebox from "./components/Timebox"

export default function AppointmentInput({ textMaxWidth }) {

    //form
    //textbox -> mm-dd-yyyy -> hh:mm

    const [text, setText] = useState()
    const [textError, setTextError] = useState("")

    return (
        <>
            <div className="d-flex flex-column gap-3" style={{ maxWidth: textMaxWidth + "px" }}>
                <div className="fs-5">
                    Appointment title *
                </div>
                <Textbox
                    id={"appointment-title"}
                    text={text}
                    setText={setText}
                    textError={textError}
                    textHint={"Enter the name for your appointment"}
                    fontSize={"fs-5"}
                />
            </div>
            <Datebox />
            <Timebox />
        </>
    )
}