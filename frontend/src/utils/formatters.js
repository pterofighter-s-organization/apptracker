

export function textFormatter(text) {

    //only uppercase the first letter of a word
    return text.replace(/\b\w/g, letter => letter.toUpperCase());
}

export function dateFormatter(date) {

    //making sure every - is converted into / for not taking up space
    return date.replaceAll("-", "/")
}

export function timeFormatter(time) {

    //hh:mm:ss
    const timeObj = time.split(":")
    let hours = parseInt(timeObj[0])
    const mins = timeObj[1]

    //convert to humanized time (ex: 1:20pm)
    if (hours === 0) {
        hours += 12
        return { hours: hours, mins: mins, period: "am" }
    }
    if (hours === 12) {
        return { hours: hours, mins: mins, period: "pm" }
    }
    if (hours > 12) {
        return { hours: hours - 12, mins: mins, period: "pm" }
    }

    return { hours: hours, mins: mins, period: "am" }
}

export function labelFormatter(prefix, label) {

    //if not null
    if ((prefix && label) || (prefix.length === 0 && label)) {
        return prefix + "_" + label
    }
    if (prefix && !label) {
        return prefix
    }
    return label
}