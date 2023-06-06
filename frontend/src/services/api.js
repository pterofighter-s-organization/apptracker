import axios from "axios"

const API_BASE_URL = "http://localhost:8000/api"

const apiClient = axios.create({
    baseURL: API_BASE_URL,
})

const applicationAPI = {
    getApplications: () => apiClient.get('/application'),
    getApplication: (application_id) => apiClient.get('/application/'+application_id),
    createApplication: (application) => apiClient.post('/application', application),
    updateApplication: (application_id, application) => apiClient.put('/application/' + application_id, application),
}

const taskAPI = {
    getTasks: () => apiClient.get('/task'),
    getTask: (task_id) => apiClient.get('/task/' + task_id),
    getApplicationTasks: (application_id) => apiClient.get('/task_app/' + application_id),
    createTask: (task) => apiClient.post('/task', task),
    updateTask: (task_id, task) => apiClient.put('/task/' + task_id, task)
}

const noteAPI = {
    getNotes: () => apiClient.get('/notes'),
    getNote: (note_id) => apiClient.get('/notes/' + note_id),
    getApplicationNotes: (application_id) => apiClient.get('/notes_app/' + application_id),
    createNote: (note) => apiClient.post('/notes', note),
    updateNote: (note_id, note) => apiClient.put('/notes/'+ note_id, note)
}

const APIs = {
    applicationAPI,
    taskAPI,
    noteAPI
}

export default APIs