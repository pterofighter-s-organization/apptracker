

export default function basicDataInitializer (application) {

    //raw data
    const basicData = {
        "status": "interested",
        "position": "",
        "company": "",
        "salary": "",
        "interviewPreparation": "",
        "resume": "",
        "coverLetter": "",
        "description": "",
    }

    if(application){
        Object.entries(basicData).forEach(([label, _]) => {
            basicData[label] = application[label]
        })
    }

    return basicData
}