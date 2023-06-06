

export default function basicDataInitializer (inputObj) {

    //raw data
    const basicData = {
        "status": "interested",
        "position": "",
        "company": "",
        "salary": "",
        "interview_preparation_link": "",
        "resume_link": "",
        "cover_letter_link": "",
        "description": "",
    }

    if(inputObj){
        Object.entries(basicData).forEach(([label, _]) => {
            basicData[label] = inputObj[label]
        })
    }

    return basicData
}