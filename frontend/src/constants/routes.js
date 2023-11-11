import { ARCHIVED_BIN_ICON } from "./components"

export const HOME_ROUTE = {
    text: "dashboard",
    route: "/",
    icon: ""
}

export const NEW_APP_ROUTE = {
    text: "new job",
    route: "/new-app",
    icon: "bi bi-plus-circle-fill"
}

export const FEATURES_ROUTES = [
    {
        text: "all jobs",
        route: "/all-jobs",
        icon: "bi bi-file-post-fill"
    },
    {
        text: "all tasks",
        route: "/all-tasks",
        icon: "bi bi-view-list"
    },
    {
        text: "all notes",
        route: "/all-notes",
        icon: "bi bi-stickies-fill"
    },
    // {
    //     text: "archived bin",
    //     route: "/archived-bin",
    //     icon: ARCHIVED_BIN_ICON
    // }
]

export const LOGIN_ROUTE = {
    text: "sign in",
    route: "/login",
    icon: "bi bi-door-open-fill"
}