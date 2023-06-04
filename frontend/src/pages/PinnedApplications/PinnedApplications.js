import { useMemo } from 'react';
import { Link } from 'react-router-dom';

//components
import { ApplicationCard } from '../../components/Cards';

//layouts
import { SectionLayout } from '../../layouts/SectionLayout';

//hooks
import useApplicationsManager from '../../hooks/useApplicationsManager';

//helpers
import * as applicationHelpers from '../../helpers/applicationHelpers';

//utils
import * as dateTimeUtils from '../../utils/dateTimeUtils';

//css
import "./PinnedApplications.css"

export default function PinnedApplications() {

    const { applications, updateApplication, isLoading: appsLoading } = useApplicationsManager()
    const isArchived = false

    const categorizedApps = useMemo(() => {
        if (applications) {
            applications.sort((a, b) => {
                return (-1 * dateTimeUtils.compareDates(a.date_edited, b.date_edited))
            })
            const res = applicationHelpers.categorizeApplications(applications, "status")
            return [...res.interested].filter(app => app.archived === isArchived)
        }
        return null
    }, [applications, isArchived])

    if (!categorizedApps) {
        return <>Applications cannot be fetched!</>
    }

    return (
        <div className="d-flex flex-column gap-5">
            <SectionLayout title={"Interested Applications"}>
                {!appsLoading ?
                    categorizedApps.length > 0 ?
                        <div className="d-flex flex-wrap justify-content-evenly justify-content-xl-start gap-3 gap-xl-4" id="interested-apps">
                            {categorizedApps.map((app) => (
                                <ApplicationCard
                                    application={app}
                                    updateApplication={updateApplication}
                                    isArchived={isArchived}
                                />
                            ))}
                        </div>
                        :
                        <Link
                            to="/application/new/interested"
                            className="btn btn-primary d-flex align-items-center justify-content-center fs-5 p-4"
                            id="application-interested-add"
                        >
                            <div className="fs-5">
                                Click me to start tracking interested applications
                            </div>
                        </Link>
                    :
                    <>Loading...</>
                }
            </SectionLayout>
        </div>
    )
}