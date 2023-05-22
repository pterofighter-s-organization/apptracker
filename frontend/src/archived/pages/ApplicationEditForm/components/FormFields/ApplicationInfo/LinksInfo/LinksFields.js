//input components
import UrlField from '../../../../../../components/Inputs/Url/UrlField';

export default function LinksField(props) {

    const {
        formData,
        setFormData,
        fontSize,
        errorMsgs
    } = props

    return (
        <div className="d-flex flex-column gap-1 bg-body-secondary w-100 p-4">
            <div className="">
                Link to documents used :
            </div>
            <hr/>
            <div className="d-flex flex-wrap gap-4">
                <UrlField
                    formData={formData}
                    setFormData={setFormData}
                    errorMsg={errorMsgs}
                    fontSize={fontSize}
                    minWidth={"100%"} 
                    width={"100%"} 
                    label={"resume"}
                    header={"Resume link *"}
                    footer={"Insert the url to the doc"}
                />
                <UrlField
                    formData={formData}
                    setFormData={setFormData}
                    errorMsg={errorMsgs}
                    fontSize={fontSize}
                    minWidth={"100%"} 
                    width={"100%"} 
                    label={"coverLetter"}
                    header={"Cover letter link *"}
                    footer={"Insert the url to the doc"}
                />
                <UrlField
                    formData={formData}
                    setFormData={setFormData}
                    errorMsg={errorMsgs}
                    fontSize={fontSize}
                    minWidth={"100%"} 
                    width={"100%"} 
                    label={"interviewPreparation"}
                    header={"Interview Preparation link *"}
                    footer={"Insert the url to the doc"}
                />
            </div>
        </div>
    )
}