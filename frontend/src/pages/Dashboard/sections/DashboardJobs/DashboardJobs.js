import { useContext, useEffect, useMemo } from "react"

//components
import { SectionHeader } from "../../../../components/SectionHeader"
import { CardList } from "../../../../components/CardList"
import { RedirectButton } from "../../../../components/Buttons/RedirectButton"

//context-providers
import { JobsContext } from "../../../../hooks/contexts/JobsContext"

//helpers
import { filterDataByStatus } from "../../../../helpers/helpers"

//css
import "./DashboardJobs.css"
import { ErrorDisplay } from "../../../../components/Displays/ErrorDisplay"

export default function DashboardJobs({ status, isPreview, isShow }) {

    const { jobs, getApplications } = useContext(JobsContext)

    useEffect(() => {
        getApplications()
    }, [getApplications])

    const filteredData = useMemo(() => {
        return filterDataByStatus(status, jobs.data)
    }, [jobs.data, status])

    if (jobs.loading) {
        return <>Loading...</>
    }

    if (jobs.errors) {
        return (
            <ErrorDisplay
                label={"Jobs"}
                errors={jobs.errors}
                isSection={true}
            />
        )
    }

    return (
        <>
            <SectionHeader
                IconComponent={<i className="bi bi-file-post-fill" />}
                title={
                    `${filteredData.length} jobs ${status === "archived" ? "to dispose" : "tracked"}`
                }
                ButtonComponent={
                    <RedirectButton
                        link={"/all-jobs/" + status}
                        label={`all jobs`}
                    />
                }
            />
            <CardList
                type={"jobs"}
                cards={filteredData}
                isPreview={isPreview}
                isShow={isShow}
            />
        </>
    )
}