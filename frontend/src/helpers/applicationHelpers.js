import { convertLocaltoUTC, convertUTCtoLocal, findTodayUTCDate } from "../utils/dateTimeUtils"


export const updateJobFormErrors = (formData, errors) => {
    const updatedFormState = { ...formData }

    // Map the errors properties to the corresponding form fields
    updatedFormState.stage.error = errors.status || ''
    updatedFormState.appliedDate.error = errors.date_applied || ''
    updatedFormState.createdDate.error = errors.date_created || ''
    updatedFormState.job.error = errors.position || ''
    updatedFormState.company.error = errors.company || ''
    updatedFormState.paid.error = errors.salary || ''
    updatedFormState.rate.error = errors.salary_rate || ''
    updatedFormState.description.error = errors.description || ''
    updatedFormState.relatedSite.error = errors.relatedSite || ''
    updatedFormState.resumeLink.error = errors.resume_link || ''
    updatedFormState.coverLetterLink.error = errors.cover_letter_link || ''

    return updatedFormState
}

export const createJobData = (formState) => {

    //convert form data back to backend accepted data.
    return {
        application_link: formState.relatedSite.value || '',
        company: formState.company.value || '',
        cover_letter_link: formState.coverLetterLink.value || '',
        date_applied: formState.appliedDate.value?.length > 0 ? convertLocaltoUTC(formState.appliedDate.value) : null,
        date_created: formState.createdDate.value || null,
        description: formState.description.value || '',
        position: formState.job.value || '',
        resume_link: formState.resumeLink.value || '',
        salary: formState.paid.value || '',
        salary_rate: formState.rate.value || '',
        status: formState.stage.value || '',
    }
}

export const updateJobFormData = (formData, data) => {
    const updatedFormState = { ...formData }

    // Map the data properties to the corresponding form fields
    updatedFormState.stage.value = data.status || ''
    updatedFormState.appliedDate.value = data.date_applied?.length > 0 ? convertUTCtoLocal(data.date_applied) : null
    updatedFormState.createdDate.value = data.date_created || null
    updatedFormState.job.value = data.position || ''
    updatedFormState.company.value = data.company || ''
    updatedFormState.paid.value = data.salary || ''
    updatedFormState.rate.value = data.salary_rate || 'hr'
    updatedFormState.description.value = data.description || ''
    updatedFormState.relatedSite.value = data.application_link || ''
    updatedFormState.resumeLink.value = data.resume_link || ''
    updatedFormState.coverLetterLink.value = data.cover_letter_link || ''
    updatedFormState.rate.value = data.salary_rate || ''

    return updatedFormState
}

export const updateDateApplied = (stage, dateData, isConvertLocal) => {
    // console.log(dateData)
    if (dateData?.length > 0) {
        return dateData
    } else {
        if (stage === "applied") {
            return isConvertLocal ? convertUTCtoLocal(findTodayUTCDate()) : findTodayUTCDate()
        }
        return null
    }
}

export const filterJobsByStage = (stage, jobs) => {

    // console.log(stage, jobs.filter((job) => (
    //     job.status === stage
    // )))
    return (
        stage ?
            jobs.filter((job) => (
                job.status === stage
            ))
            :
            jobs
    )
}