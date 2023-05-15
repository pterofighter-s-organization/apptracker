
//utils
import { validateTime } from "../../../../../../../../utils/time"

//helper validator only for taskform

export default function timeValidator(time, setErrorMsgs){

    const check = validateTime(time)

    if (!check) {
        const errorMsg = "Please select a valid time"
        setErrorMsgs(prevErrorMsgs => ({...prevErrorMsgs, "time": errorMsg}))
    } else {
        setErrorMsgs(prevErrorMsgs => ({...prevErrorMsgs, "time": ""}))
    }

    //if it fits the requirement
    return check
}