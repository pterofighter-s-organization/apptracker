import { useState } from "react"

//components
import Textbox from "./components/Textbox"
import Datebox from "./components/Datebox"
import Timebox from "./components/Timebox"

export default function AppointmentInput() {

    //form
    //textbox -> mm-dd-yyyy -> hh:mm

    const [text, setText] = useState()
    const [date, setDate] = useState()
    const [time, setTime] = useState()

    const [textError, setTextError] = useState("")
    const [dateError, setDateError] = useState("")
    const [timeError, setTimeError] = useState("")

    return (
        <div className="d-flex flex-wrap gap-3 gap-sm-4">
            <div className="d-flex flex-column gap-3" style={{ width: "800px", maxWidth: "100vw" }}>
                <div className="fs-5">
                    Appointment title *
                </div>
                <Textbox
                    text={text}
                    setText={setText}
                    textError={textError}
                    textHint={"Enter the name for your appointment"}
                    fontSize={"fs-5"}
                />
            </div>
            <div className="d-flex flex-column gap-3">
                <div className="fs-5">
                    Date of the appointment *
                </div>
                <Datebox 
                    date={date}
                    setDate={setDate}
                    dateError={dateError}
                    textHint={"Select in (MM DD YYYY)"}
                    fontSize={"fs-5"}
                />
            </div>
            <div className="d-flex flex-column gap-3">
                <div className="fs-5">
                    Time *
                </div>
                <Timebox 
                    time={time}
                    timeError={timeError}
                    setTime={setTime}
                    textHint={"24 hr format (hh:mm)"}
                    fontSize={"fs-5"}
                />
            </div>
        </div>
    )
}