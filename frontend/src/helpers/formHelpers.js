import { debounce } from "../utils/debounce"

export const handleAPIErrors = (error) => {
    return error.code === "ERR_BAD_REQUEST"
        ? "Please check the invalid fields and correct them."
        : error.message
}

export const showAPIAlertErrors = debounce((error, type) => {
    alert(`${type ? type.toUpperCase() + " response: " : ""}${handleAPIErrors(error)}`)
}, 250)