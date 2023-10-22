import { useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';

//components
import { ApplicationCard } from '../../components/Cards/ApplicationCard';

//layouts
import { SectionLayout } from '../../layouts/SectionLayout';

//hooks
import useApplicationsManager from '../../hooks/useApplicationsManager';

//helpers
import * as applicationHelpers from '../../helpers/applicationHelpers';

//utils
import * as dateTimeUtils from '../../utils/dateTimeUtils';

export default function PinnedApplications() {

    const { applications, updateApplication, isLoading: appsLoading } = useApplicationsManager()
    const isArchived = false

    useEffect(() => {
        document.title = " Interested Apps -  Job Tracker App"
        return () => document.title = "Job Tracker App"
    }, [])

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
        return (
            <SectionLayout title={"Interested Applications"}>
                Applications cannot be fetched! Mostly backend not connected.
            </SectionLayout>
        )
    }

    return (
        <div className="d-flex flex-column gap-5">
            <SectionLayout title={"Interested Applications"}>
                {!appsLoading ?
                    categorizedApps.length > 0 ?
                        <div className="d-flex flex-wrap justify-content-evenly justify-content-xl-start gap-3 gap-xl-4" id="interested-apps">
                            {categorizedApps.map((app, index) => (
                                <ApplicationCard
                                    key={index}
                                    application={app}
                                    updateApplication={updateApplication}
                                    isArchived={isArchived}
                                />
                            ))}
                        </div>
                        :
                        <Link
                            to="/application/new/interested"
                            className={`btn btn-primary d-flex align-items-center justify-content-center fs-5 p-4 ${"item-add-display-button"}`}
                        >
                            <div className="display-button-label">
                                Start tracking interested applications
                            </div>
                        </Link>
                    :
                    <>Loading...</>
                }
            </SectionLayout>
        </div>
    )
}