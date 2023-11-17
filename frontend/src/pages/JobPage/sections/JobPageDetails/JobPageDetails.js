
//components
import { HyperLinkButton } from "../../../../components/Buttons/HyperLinkButton"

//css
import "./JobPageDetails.css"
import "../../JobPage.css"

export default function JobPageDetails() {

    const testDate = "02-22-2022 10:38pm"
    const description = `job description: software engineer

    responsibilities:
    develop high-quality software solutions based on technical requirements
    collaborate with cross-functional teams to design, build, and maintain software applications
    participate in code reviews and provide constructive feedback to ensure code quality
    troubleshoot and debug software issues
    continuously improve software development processes and practices
    stay updated with industry trends and technologies to enhance technical skills
    document software specifications and maintain accurate project documentation
    adhere to coding standards and best practices
    meet project deadlines and deliver high-quality results
    
    requirements:
    bachelor's degree in computer science or a related field (or equivalent work experience)
    strong knowledge of programming languages such as Java, C++, or Python
    experience with software development methodologies and tools
    familiarity with version control systems (e.g., Git)
    ability to work independently and collaboratively in a team environment
    excellent problem-solving and analytical skills
    strong communication and interpersonal skills
    attention to detail and commitment to delivering high-quality work
    willingness to learn and adapt to new technologies and frameworks
    
    Note: This is just a sample job description for a software engineer position. Actual job descriptions may vary based on specific requirements and company needs.`

    return (
        <>
            <div className="job-page-divider">
                <div className="job-page-content-bg job-page-divider-content">
                    <h5 style={{ color: "#808080" }}>
                        - Google
                    </h5>
                    <h1>
                        UX/UI Designer
                    </h1>
                    <h5 style={{ color: "#009E60" }}>
                        $120 /Hr
                    </h5>
                </div>
                <div className="job-page-content-bg job-page-divider-content job-page-dates">
                    <h6>
                        <b>Updated:</b> {testDate}
                    </h6>
                    <h6>
                        <b>Created:</b> {testDate}
                    </h6>
                    <h6>
                        <b>Applied:</b> {testDate}
                    </h6>
                </div>
            </div>
            <div className="job-page-content-bg job-page-links">
                <HyperLinkButton
                    link={""}
                    label={"related site"}
                />
                <HyperLinkButton
                    link={""}
                    label={"resume doc"}
                />
                <HyperLinkButton
                    link={""}
                    label={"cover letter"}
                />
            </div>
            <div className="job-page-content-bg job-page-description-container">
                <h5>Description:</h5>
                <pre className="job-page-description">
                    {
                        description && description.length > 0? 
                            description
                            :
                            "No description at the moment."
                    }
                </pre>
            </div>
        </>
    )
}