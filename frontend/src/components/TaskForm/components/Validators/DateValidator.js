
//utils
import { validateDate } from "../../../../utils/date"

//helper validator only for taskform

export default function dateValidator(date, setErrorMsgs) {

    const check = validateDate(date)

    if (!check) {
        const errorMsg = "Please select a valid date"
        setErrorMsgs(prevErrorMsgs => ({...prevErrorMsgs, "date": errorMsg}))
    } else {
        setErrorMsgs(prevErrorMsgs => ({...prevErrorMsgs, "date": ""}))
    }
    

    //if it fits the requirement
    return check
}

