
//utils
import { compareDates, convertLocaltoUTC } from '../utils/dateTime'
import { strFormatter } from '../utils/format'

export const createTaskData = (formState) => {

    return ({
        title: strFormatter(formState.name.value) || '',
        date_due: formState.dateDue.value?.length > 0 ? convertLocaltoUTC(formState.dateDue.value) : null
    })
}

export const updateTaskFormErrors = (formData, errors) => {
    const updatedFormState = { ...formData }

    updatedFormState.name.error = errors.title || ''
    updatedFormState.dateDue.error = errors.date_due || ''

    return updatedFormState
}

export const sortTasksByDateDue = (tasks) => {

    return tasks.sort((a, b) => compareDates(a.date_due, b.date_due))
}