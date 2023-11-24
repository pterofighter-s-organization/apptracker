import { convertLocaltoUTC, convertUTCtoLocal } from "../utils/dateTimeUtils"


export const updateFormStateFromErrors = (formData, errors) => {
    const updatedFormState = { ...formData }

    // Map the errors properties to the corresponding form fields
    updatedFormState.stage.error = errors.status || ''
    updatedFormState.appliedDate.error = errors.date_applied || ''
    updatedFormState.createdDate.error = errors.date_created || ''
    updatedFormState.job.error = errors.position || ''
    updatedFormState.company.error = errors.company || ''
    updatedFormState.paid.error = errors.salary || ''
    updatedFormState.description.error = errors.description || ''
    updatedFormState.relatedSite.error = errors.relatedSite || ''
    updatedFormState.resumeLink.error = errors.resume_link || ''
    updatedFormState.coverLetterLink.error = errors.cover_letter_link || ''

    return updatedFormState;
}

export const createDataFromFormState = (formState) => {

    return {
        application_link: formState.relatedSite.value || '',
        archived: false,
        company: formState.company.value || '',
        cover_letter_link: formState.coverLetterLink.value || '',
        date_applied: formState.appliedDate.value ? convertLocaltoUTC(formState.appliedDate.value) : "",
        date_created: formState.createdDate.value || '',
        description: formState.description.value || '',
        position: formState.job.value || '',
        resume_link: formState.resumeLink.value || '',
        salary: (formState.paid.value || ''),
        status: formState.stage.value || '',
    }
}

export const updateFormStateFromData = (formData, data) => {
    const updatedFormState = { ...formData }

    // Map the data properties to the corresponding form fields
    updatedFormState.stage.value = data.status || ''
    updatedFormState.appliedDate.value = (data.date_applied) ? convertUTCtoLocal(data.date_applied) : ''
    updatedFormState.createdDate.value = data.date_created || ''
    updatedFormState.job.value = data.position || ''
    updatedFormState.company.value = data.company || ''
    updatedFormState.paid.value = data.salary || ''
    updatedFormState.rate.value = 'hour'
    updatedFormState.description.value = data.description || ''
    updatedFormState.relatedSite.value = data.application_link || ''
    updatedFormState.resumeLink.value = data.resume_link || ''
    updatedFormState.coverLetterLink.value = data.cover_letter_link || ''

    return updatedFormState;
}
