


export const APP_STAGE_COLORS = {
    "applied": "#FFC857",
    "rejected": "#FF0000",
    "interviewing": "#4A47F2",
    "interested": "#808080",
    "accepted": "#009900", // Updated to a slightly darker green
    "ghosted": "#000000",
    // "archived": "#FFFFFF",
};

export const APP_STATUS_COLORS = {
    "archived": "#808080",
    "active": "#009900"
}

export const SCREEN_BREAKPOINTS = {
    "s": 576,
    "sm": 768,
    "md": 992,
    "lg": 1200,
    "xl": 1400,
}

export const JOB_FORM_DATA = {
    stage: {
        value: "interested",
        error: ""
    },
    appliedDate: {
        value: "",
        error: ""
    },
    createdDate: {
        value: "",
        error: ""
    },
    job: {
        value: "",
        error: ""
    },
    company: {
        value: "",
        error: ""
    },
    paid: {
        value: "",
        error: ""
    },
    rate: {
        value: "hr",
        error: ""
    },
    description: {
        value: "",
        error: ""
    },
    relatedSite: {
        value: "",
        error: ""
    },
    resumeLink: {
        value: "",
        error: ""
    },
    coverLetterLink: {
        value: "",
        error: ""
    }
}

export const TASK_FORM_DATA = {
    name: {
        value: "",
        error: ""
    },
    dateDue: {
        value: "",
        error: ""
    }
}