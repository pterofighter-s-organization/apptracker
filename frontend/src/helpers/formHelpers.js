
export const handleAPIErrors = (error) => {
    return error.code === "ERR_BAD_REQUEST"
        ? "Please check the invalid fields and correct them."
        : error.message
}

