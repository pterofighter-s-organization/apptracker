
const fs = require('fs');
const file = "applications.json"

//mimic backend
export const updateApp = (app, id) => {

    //get apps from backend making sure they didnt change or updated because this is mimic instead of actual real time db
    let applications = []
    try{
        applications = getApps()
    }catch (err){
        return err
    }

    //find where the app is and update it
    const index = applications.findIndex((item) => item.id === id)
    applications[index] = app

    //write it back into the database
    fs.writeFile(file, JSON.stringify(applications), (err) => {
        if (err) {
            return new Exception("can't update the file")
        } else {
            return applications
        }
      });
}

export const getApps = () => {
    fs.readFile(file, (err, data) => {
        if (err) {
            return new Exception("can't read file")
        } else {
            const jsonData = JSON.parse(data)
            return jsonData.applications
        }
    })
}