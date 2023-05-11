
//we dont use this file yet until backend is finish

const apiUrl = "/data/backendMimic"

export const getAllApps = async () => {
    try{
        const response = await fetch(apiUrl)
        const data = await response.json()
        return data.applications
    }catch (err){
        return []
    }
}

export const updateApp = async (id, app) => {
    const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(app),
      };

    try{
        const response = await fetch(apiUrl + `/${id}` + options)
        const data = await response.json()
        return data.applications
    }catch (err){
        return []
    }
}