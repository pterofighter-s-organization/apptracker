
export default function ApplicationAccordion ({statuses, categorizedApps}) {

    //this is a test file to see if accordions work on dashboard
    //it works but not nice looking yet

    return (
        <div className="accordion" id="accordionExample">
            {
                statuses.map((status) => {
                    if (status === "interviewing") {
                        return (
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${status}`} aria-expanded="true" aria-controls={`${status}`}>
                                        <h3>
                                            {status}
                                        </h3>
                                        <hr />
                                    </button>
                                </div>
                                <div id={`${status}`} className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <ApplicationCardList
                                            applications={categorizedApps[status]}
                                            updateAppStatus={updateAppStatus}
                                            nameOfList={status}
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    return (
                        <div className="accordion-item">
                            <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${status}`} aria-expanded="true" aria-controls={`${status}`}>
                                    <h3>
                                        {status}
                                    </h3>
                                    <hr />
                                </button>
                            </div>
                            <div id={`${status}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <ApplicationCardList
                                        applications={categorizedApps[status]}
                                        updateAppStatus={updateAppStatus}
                                        nameOfList={status}
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}