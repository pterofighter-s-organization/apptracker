import { useEffect, useState } from "react"
import { validateTime } from "../../../utils/time"

function provideHours() {
    const res = []

    for (let i = 1; i <= 24; i += 1) {
        const stringInt = i.toString()
        if (stringInt.length > 1) {
            res.push(stringInt)
        } else {
            res.push("0" + stringInt)
        }
    }

    return res
}

function provideMins() {
    const res = []

    for (let i = 0; i <= 59; i += 1) {
        const stringInt = i.toString()
        if (stringInt.length > 1) {
            res.push(stringInt)
        } else {
            res.push("0" + stringInt)
        }
    }

    return res
}

export default function Timebox(props) {

    const {
        fontSize,
        textHint,
        time,
        setTime,
        timeError,
    } = props

    const [mins, setMins] = useState("")
    const [hours, setHours] = useState("")

    const displayMins = provideMins()
    const displayHours = provideHours()

    useEffect(() => {

        if (validateTime(time)) {
            const timeObj = time.split(":")
            setHours(timeObj[0])
            setMins(timeObj[1])
        }

        //this can ignore the warnings and make this only run once
        // eslint-disable-next-line
    }, [])

    useEffect(() => {

        if (mins.length > 0 && hours.length > 0) {
            setTime(hours + ":" + mins + ":00")
        } else {
            setTime("")
        }

    }, [mins, hours, setTime])

    function changeHoursInput(event) {
        const newHours = event.target.value
        setHours(newHours)
    }

    function changeMinsInput(event) {
        const newMins = event.target.value
        setMins(newMins)
    }

    return (
        <>
            <div className="d-flex flex-row gap-3 align-items-center">
                <select className={`form-select p-3 bg-body ${fontSize}`} style={{ width: "90px" }} onChange={(e) => changeHoursInput(e)}>
                    {hours.length > 0 ?
                        <option value="">hh</option>
                        :
                        <option selected value="">hh</option>
                    }
                    {displayHours.map((num) => {
                        if (hours !== num) {
                            return <option value={num}>{num}</option>
                        } else {
                            return <option selected value={num}>{num}</option>
                        }
                    })}
                </select>
                <select className={`form-select p-3 bg-body ${fontSize}`} style={{ width: "90px" }} onChange={(e) => changeMinsInput(e)}>
                    {mins.length > 0 ?
                        <option value="">mm</option>
                        :
                        <option selected value="">mm</option>
                    }
                    {displayMins.map((num) => {
                        if (mins !== num) {
                            return <option value={num}>{num}</option>
                        } else {
                            return <option selected value={num}>{num}</option>
                        }
                    })}
                </select>
            </div>
            {timeError && timeError.length > 0 ?
                <div className={`blockquote-footer text-danger mt-1 ${fontSize}`}>
                    {timeError}
                </div>
                :
                <div className={`blockquote-footer mt-1 ${fontSize}`}>
                    {textHint}
                </div>
            }
        </>
    )
}