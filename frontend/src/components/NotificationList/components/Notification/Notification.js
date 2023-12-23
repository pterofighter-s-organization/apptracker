
//helpers
import { handleAPIErrors } from "../../../../helpers/form"

//utils
import { getContrastTextColor } from "../../../../utils/component"

//css
import "./Notification.css"

const NOTIFICATION_STATUS = {
    FAIL: {
        color: "red",
        icon: "bi-exclamation-circle-fill"
    },
    NORMAL: {
        color: "#5CACEE",
        icon: "bi bi-bell-fill"
    },
    WARNING: {
        color: "#FF9933",
        icon: "bi bi-dash-circle-fill"
    },
    SUCCESS: {
        color: "#009E60",
        icon: "bi-check-circle-fill"
    }
}

const Notification = ({ status, message }) => {
    const notification = document.createElement("div")
    notification.style.color = getContrastTextColor(NOTIFICATION_STATUS[status].color)
    notification.innerHTML = `
        <div class="notification" style="background-color: ${NOTIFICATION_STATUS[status].color}">
            <i class="bi ${NOTIFICATION_STATUS[status].icon}"></i>
            <div class="notification-msg">
                ${message}
            </div>
        </div>
    `

    return notification
}

const showNotification = ({ status, message }) => {

    const NotificationComponent = Notification({
        status: status,
        message: message
    })

    //get notification container
    const NotificationListComponent = document.getElementById("notification-list")
    NotificationListComponent.insertBefore(NotificationComponent, NotificationListComponent.firstChild)
    // NotificationListComponent.appendChild(NotificationComponent)

    setTimeout(() => {
        NotificationListComponent.removeChild(NotificationComponent)
    }, 3000) //dismiss after 3s
}

export const showWarningNotification = ({ message }) => {

    return showNotification({
        status: "WARNING",
        message: message
    })
}

export const showFailNotification = ({ message, errors }) => {

    return showNotification({
        status: "FAIL",
        message: (
            errors ?
                handleAPIErrors({
                    errors: errors,
                    message: message
                })
                :
                message
        )
    })
}

export const showNormalNotification = ({ message }) => {

    return showNotification({
        status: "NORMAL",
        message: message
    })
}

export const showSuccessNotification = ({ message }) => {

    return showNotification({
        status: "SUCCESS",
        message: message
    })
}

export const updatingWarningNotification = () => {
    showWarningNotification({
        message: "Wait... Submitting changes."
    })
}
