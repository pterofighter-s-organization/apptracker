import axios from "axios"
import { getCookieData } from "../utils/memory"

const API_BASE_URL = "http://localhost:8000/api"

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true
})

const apiProtectedClient = () => {
    //this is to ensure the csrftoken always stay updated
    return (
        axios.create({
            headers: {
                'X-CSRFTOKEN': getCookieData(document.cookie).csrftoken
            },
            baseURL: API_BASE_URL,
            withCredentials: true
        })
    )
}

const applicationAPI = {
    getApplications: () => apiProtectedClient().get('/application'),
    getApplication: (application_id) => apiProtectedClient().get('/application/' + application_id),
    createApplication: (application) => apiProtectedClient().post('/application', application),
    updateApplication: (application_id, application) => apiProtectedClient().put('/application/' + application_id, application),
    deleteApplication: (application_id) => apiProtectedClient().delete(`/application/${application_id}`)
}

const taskAPI = {
    getTasks: () => apiProtectedClient().get('/task'),
    getTask: (task_id) => apiProtectedClient().get('/task/' + task_id),
    getApplicationTasks: (application_id) => apiProtectedClient().get('/task_app/' + application_id),
    createTask: (task) => apiProtectedClient().post('/task', task),
    updateTask: (task_id, task) => apiProtectedClient().put('/task/' + task_id, task),
    deleteTask: (task_id) => apiProtectedClient().delete(`/task/${task_id}`)
}

const noteAPI = {
    getNotes: () => apiProtectedClient().get('/notes'),
    getNote: (note_id) => apiProtectedClient().get(`/notes/${note_id}`),
    getApplicationNotes: (application_id) => apiProtectedClient().get('/notes_app/' + application_id),
    createNote: (note) => apiProtectedClient().post('/notes', note),
    updateNote: (note_id, note) => apiProtectedClient().put(`/notes/${note_id}`, note),
    deleteNote: (note_id) => apiProtectedClient().delete(`/notes/${note_id}`)
}

const userAPI = {
    loginUser: (user) => apiClient.post('/login', user),
    registerUser: (user) => apiClient.post(`/register`, user),
    updateUser: (user_id, user) => apiProtectedClient().put(`/user/${user_id}`, user),
    logoutUser: () => apiProtectedClient().delete('/logout'),
    getUser: () => apiProtectedClient().get('/user')
}

const APIs = {
    applicationAPI,
    taskAPI,
    noteAPI,
    userAPI
}

export default APIs