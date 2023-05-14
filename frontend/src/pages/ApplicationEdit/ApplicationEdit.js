import { useParams } from 'react-router-dom';

//hooks
import useApplicationManager from '../../hooks/useApplicationManager';
import { useState } from 'react';

export default function ApplicationEdit() {

    const { id } = useParams(); //get the id from the url
    const { application, updateApplication } = useApplicationManager(parseInt(id));

    const [appliedDateData, setAppliedDateData] = useState() //make a helper func


    return (
        <div
            className="d-flex flex-column gap-5 w-100 my-3 my-xl-0"
            style={{ padding: "1.25vw 2.5vw" }}
            id={"application" + application.id}
        >


        </div>
    )
}