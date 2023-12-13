import { handleAPIErrors } from "./form"

export const updateLoginErrors = (formData, errors) => {

    let errorMessage = handleAPIErrors({
        errors: errors,
    })

    if (errors.response?.status === 403) {
        errorMessage = "Current user not logged out! Clear cookies first!"
    }

    return ({
        username: {
            ...formData.username,
            error: errorMessage
        },
        password: {
            ...formData.password,
            error: errorMessage
        }
    })
}

export const updateSignupErrors = (formData, errors) => {

}

const isPasswordValid = (password) => {
    // Check the length of the password.
    if (password.length < 8) {
        return false;
    }

    // Check if the password contains at least one uppercase letter.
    if (!/[A-Z]/.test(password)) {
        return false;
    }

    // Check if the password contains at least one lowercase letter.
    if (!/[a-z]/.test(password)) {
        return false;
    }

    // Check if the password contains at least one special character.
    if (!/[!@#$%^&*()_+-=]/.test(password)) {
        return false;
    }

    // The password meets all of the criteria, so return true.
    return true;
}

const isPasswordConfirmed = (formData) => {
    return formData.newPassword.value === formData.confirmPassword.value && formData.confirmPassword.value.length > 0
}

export const customSignupValidations = (formData) => {
    let errflag = false
    const updatedFormState = {...formData}

    if (!isPasswordConfirmed(formData)) {
        updatedFormState["confirmPassword"] = {
            ...formData.confirmPassword,
            error: "This doesn't match the password you created!"
        }

        errflag = true
    } if (!isPasswordValid(formData.newPassword.value)) {
        updatedFormState["newPassword"] = {
            ...formData.newPassword,
            error: "Got to be 8 chars, 1 special, 1 lower and 1 upper case!"
        }

        errflag = true
    }

    return ({
        isError: errflag,
        updatedFormState: updatedFormState
    })
}
