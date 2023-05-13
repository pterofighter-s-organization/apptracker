

export function inputHourValues() {
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

export function inputMinValues() {
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