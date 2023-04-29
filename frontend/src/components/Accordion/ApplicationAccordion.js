
export default function ApplicationAccordion ({statuses, categorizedApps}) {

    return (
        <div class="accordion" id="accordionExample">
            {
                statuses.map((status) => {
                    if (status === "interviewing") {
                        return (
                            <div class="accordion-item">
                                <div class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${status}`} aria-expanded="true" aria-controls={`${status}`}>
                                        <h3>
                                            {status}
                                        </h3>
                                        <hr />
                                    </button>
                                </div>
                                <div id={`${status}`} class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
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
                        <div class="accordion-item">
                            <div class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${status}`} aria-expanded="true" aria-controls={`${status}`}>
                                    <h3>
                                        {status}
                                    </h3>
                                    <hr />
                                </button>
                            </div>
                            <div id={`${status}`} class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
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