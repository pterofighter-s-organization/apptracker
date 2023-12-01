
//utils
import { debounce } from "../utils/debounce"

export const handleAPIErrors = ({ errors, message }) => {
    // const result = [];

    if (!errors.response?.data) {
        return errors.message
    }

    if (errors.code === "ERR_BAD_REQUEST" && message) {
        return message
        // Object.entries(errors.response.data).forEach(([key, value]) => {
        //     result.push(`${key}: ${value}`);
        // });
        // return result.join('\n');
    } else {
        return `${errors.response.status} ${errors.response.statusText}`
    }
}

export const showAPIAlertErrors = debounce((error) => {
    alert(`${error}`)
}, 250)

export const showAlert = debounce((messages) => {
    alert(`${messages}`)
}, 250)
