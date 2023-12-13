


export const createObjCopy = (obj) => {
    return JSON.parse(JSON.stringify(obj))
}

export const getCookieData = (cookie) => {
    const splittedData = cookie.includes(";") ? cookie.split(";") : [cookie]
    const cookieData = {}

    for (const data of splittedData) {
        const [key, value] = data.split("=")
        cookieData[key] = value
    }

    return cookieData
}