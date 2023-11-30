
//helpers
import { handleAPIErrors } from "../../../../helpers/formHelpers"

//utils
import { getContrastTextColor } from "../../../../utils/componentUtils"

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

export const showNotification = ({ status, message }) => {
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

export const showSubmitNotification = ({ status, message, errors, errorMessage }) => {

    return (
        showNotification({
            status: status ? "SUCCESS" : "FAIL",
            message: status ? message : handleAPIErrors({
                errors: errors,
                message: errorMessage
            })
        })
    )
}