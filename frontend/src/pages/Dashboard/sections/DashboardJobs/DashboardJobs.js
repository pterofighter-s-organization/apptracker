import { useContext, useEffect } from "react"

//components
import { SectionHeader } from "../../../../components/SectionHeader"
import { CardList } from "../../../../components/CardList"
import { RedirectButton } from "../../../../components/Buttons/RedirectButton"

//context-providers
import { JobsContext } from "../../../../hooks/contexts/JobsContext"

//helpers
import { filterDataByStatus } from "../../../../helpers/helpers"

//css


export default function DashboardJobs({ status, isPreview, isShow }) {

    const { jobs, getApplications } = useContext(JobsContext)

    useEffect(() => {
        getApplications()
    }, [getApplications])

    if (jobs.loading) {
        return <>Loading...</>
    }

    return (
        <>
            <SectionHeader
                IconComponent={<i className="bi bi-file-post-fill" />}
                title={
                    `${filterDataByStatus(status, jobs.data).length} jobs ${status === "archived" ? "to dispose" : "tracked"}`
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
                cards={filterDataByStatus(status, jobs.data)}
                isPreview={isPreview}
                isShow={isShow}
            />
        </>
    )
}