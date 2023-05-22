import { useState } from "react"

//components
import Textbox from "./components/Textbox"
import Datebox from "./components/Datebox"
import Timebox from "./components/Timebox"

export default function AppointmentForm({ setAppointment, fontSize }) {

    //form
    //textbox -> mm-dd-yyyy -> hh:mm

    const [text, setText] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")

    const [textError, setTextError] = useState("")
    const [dateError, setDateError] = useState("")
    const [timeError, setTimeError] = useState("")

    function handleSubmit(event) {

        //avoid re-rendering the page
        event.preventDefault()

        if (time.length <= 0) {
            setTimeError("Please don't leave time empty")
        } else if (time.length > 0) {
            setTimeError("")
        }

        if (date.length <= 0) {
            setDateError("Please don't leave date empty")
        } else if (date.length > 0) {
            setDateError("")
        }

        if (text.length <= 0) {
            setTextError("Please don't leave title empty")
        } else if (text.length > 0) {
            setTextError("")
        }

        if (time.length > 0 && date.length > 0 && text.length > 0) {

            const appointment = {
                title: text,
                date: (date + " " + time),
            }

            setAppointment(appointment)
            //make a modal later * and clean up the code please
        }
    }

    return (
        <form className="d-flex flex-column gap-3 gap-xl-4" onSubmit={(e) => { handleSubmit(e) }}>
            <div className="d-flex flex-wrap gap-3 gap-sm-4">
                <div className="d-flex flex-column gap-3" style={{ width: "800px", maxWidth: "100vw" }}>
                    <div className={`${fontSize}`}>
                        Appointment title *
                    </div>
                    <Textbox
                        text={text}
                        setText={setText}
                        textError={textError}
                        textHint={"Enter the name for your appointment"}
                        fontSize={fontSize}
                    />
                </div>
                <div className="d-flex flex-column gap-3">
                    <div className={`${fontSize}`}>
                        Date of the appointment *
                    </div>
                    <Datebox
                        date={date}
                        setDate={setDate}
                        dateError={dateError}
                        textHint={"Select in (MM DD YYYY)"}
                        fontSize={fontSize}
                    />
                </div>
                <div className="d-flex flex-column gap-3">
                    <div className={`${fontSize}`}>
                        Time *
                    </div>
                    <Timebox
                        time={time}
                        timeError={timeError}
                        setTime={setTime}
                        textHint={"24 hr format (hh:mm)"}
                        fontSize={fontSize}
                    />
                </div>
            </div>
            <button className={`btn btn-primary p-3 ${fontSize}`} type="submit">
                Submit
            </button>
        </form>
    )
}