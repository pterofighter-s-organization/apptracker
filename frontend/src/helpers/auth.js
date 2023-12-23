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
    //for later use
}

const isNewPasswordValid = (password) => {
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

const isNewPasswordConfirmed = (formData) => {
    return formData.newPassword.value === formData.confirmPassword.value && formData.confirmPassword.value.length > 0
}

const handleFieldsEmpty = (formData, isError) => {
    const updatedFormState = {}

    const entries = Object.entries(formData)
    for (const [key, values] of entries) {
        if (values.value.length <= 0) {
            updatedFormState[key] = {
                ...values,
                error: "This field can't be empty."
            }

            isError = true
        } else {
            updatedFormState[key] = { ...values }
        }
    }

    return {
        data: updatedFormState,
        isError: isError
    }
}

//mimic backend validations with a promise
export const customSignupValidations = async (formData) => {
    return new Promise(async (resolve, reject) => {
        let isError = false
        let updatedFormState = { ...formData }

        if (!isNewPasswordConfirmed(formData)) {
            updatedFormState["confirmPassword"] = {
                ...updatedFormState.confirmPassword,
                error: "This doesn't match the password you created!"
            }

            isError = true
        } if (!isNewPasswordValid(formData.newPassword.value)) {
            updatedFormState["newPassword"] = {
                ...updatedFormState.newPassword,
                error: "Got to be 8 chars, 1 special, 1 lower and 1 upper case!"
            }

            isError = true
        }

        const handledResult = handleFieldsEmpty(updatedFormState, isError)
        updatedFormState = handledResult.data
        isError = handledResult.isError

        if (isError) {
            reject({
                // Adjust the structure here to match the expected structure in an api error
                code: 'ERR_CUSTOM_VALIDATION',
                data: updatedFormState,
                message: 'Please fix the errors below!',
            });
        } else {
            resolve(updatedFormState)
        }
    })
}

export const isCodeNetworkError = (errors) => {
    return errors?.code === 'ERR_NETWORK'
}

export const isCodeBadRequest = (errors) => {
    return errors?.code === 'ERR_BAD_REQUEST'
}