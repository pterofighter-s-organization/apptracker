export const HOME_ROUTE = {
    text: "dashboard",
    route: "/auth/dashboard",
    icon: ""
}

export const NEW_APP_ROUTE = {
    text: "new job",
    route: "/auth/job",
    icon: "bi bi-plus-circle-fill"
}

export const FEATURES_ROUTES = [
    {
        text: "all jobs",
        route: "/auth/jobs",
        icon: "bi bi-file-post-fill"
    },
    {
        text: "all tasks",
        route: "/auth/tasks",
        icon: "bi bi-card-checklist"
    },
    {
        text: "all notes",
        route: "/auth/notes",
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
    route: "/notAuth/login",
    icon: "bi bi-door-open-fill"
}

export const LOGOUT_ROUTE = {
    text: "sign out",
    route: "/auth/logout",
    icon: "bi bi-door-open-fill"
}