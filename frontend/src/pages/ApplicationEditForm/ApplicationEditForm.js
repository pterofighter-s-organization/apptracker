import { useParams } from 'react-router-dom';

//hooks
import useApplicationManager from '../../hooks/useApplicationManager';
import { useEffect, useState } from 'react';
import { dateTimeInitializer } from './helpers/Initializers';

export default function ApplicationEditForm() {

    const { id } = useParams(); //get the id from the url
    const { application, updateApplication } = useApplicationManager(parseInt(id));

    // //dates info
    const [dateTimeApplied, setDateTimeApplied] = useState({
        "day": "",
        "month": "",
        "year": "",
        "hour": "",
        "min": "",
    })

    const [dateTimeUpdated, setDateTimeUpdated] = useState({
        "day": "",
        "month": "",
        "year": "",
        "hour": "",
        "min": "",
    })

    const [dateTimeCreated, setDateTimeCreated] = useState({
        "day": "",
        "month": "",
        "year": "",
        "hour": "",
        "min": "",
    })

    const [linksInfo, setLinksInfo] = useState({
        "resume": "",
        "coverLetter": "",
        "interviewPreparation": ""
    })

    const [applicationInfo, setApplicationInfo] = useState({
        "position": "",
        "company": "",
        "salary": "",
        "description": ``
    })

    const [errorMsgs, setErrorMsgs] = useState({
        "resume": "",
        "coverLetter": "",
        "interviewPreparation": "",
        "position": "",
        "company": "",
        "salary": "",
        "description": "",
        "dateApplied": "",
        "timeApplied": "",
        "dateUpdated": "",
        "timeUpdated": "",
        "dateCreated": "",
        "timeCreated": "",
    })

    useEffect(() => {

        if (application) {
            setDateTimeApplied(dateTimeInitializer(application.dateApplied))
            setDateTimeCreated(dateTimeInitializer(application.dateCreated))
            setDateTimeUpdated(dateTimeInitializer(application.dateUpdated))
            setLinksInfo({
                "resume": application.resume,
                "coverLetter": application.coverLetter,
                "interviewPreparation": application.interviewPreparation,
            })
            setApplicationInfo({
                "position": application.position,
                "company": application.company,
                "salary": application.salary,
                "description": application.description,
            })
        }
    }, [application])

    return (
        <>
            {application ?
                <div
                    className="d-flex flex-column gap-5 w-100 my-3 my-xl-0"
                    style={{ padding: "1.25vw 2.5vw" }}
                    id={"application" + application.id}
                >


                </div>
                :
                <>
                </>

            }
        </>
    )
}