

export default function basicDataInitializer (inputObj) {

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

    if(inputObj){
        Object.entries(basicData).forEach(([label, _]) => {
            basicData[label] = inputObj[label]
        })
    }

    return basicData
}