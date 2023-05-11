import ApplicationCard from "../../Card/ApplicationCard.js"

export default function ApplicationCardList({ nameOfList, updateAppStatus, applications }) {

    //gonna pass down the loading state soon *

    //put loading state here instead because if applications is empty then the loading state 
    //wont happen in the card cause it wont even render
    console.log(applications)
    return (
        <>
            <div className="d-flex flex-wrap gap-3 gap-lg-5">
                {applications.map((application) => (
                    // console.log(application, "test")
                    <ApplicationCard
                        key={application.id}
                        application={application}
                        updateAppStatus={updateAppStatus}
                    />
                ))}
            </div>
        </>
    )
}