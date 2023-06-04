//input components
import TextField from '../../../../../../components/Inputs/Text/TextField';

export default function NamesField(props) {

    const {
        formData,
        setFormData,
        fontSize,
        errorMsgs
    } = props

    return (
        <div className="d-flex flex-column bg-body-secondary w-100 p-4">
            <div className="">
                Job Information :
            </div>
            <hr/>
            <div className="d-flex flex-wrap gap-4">
                <TextField
                    formData={formData}
                    setFormData={setFormData}
                    errorMsg={errorMsgs}
                    fontSize={fontSize}
                    minWidth={"100%"} 
                    width={"100%"} 
                    label={"position"}
                    header={"Position applied *"}
                    footer={"Ex. Software Engineer"}
                />
                <TextField
                    formData={formData}
                    setFormData={setFormData}
                    errorMsg={errorMsgs}
                    fontSize={fontSize}
                    minWidth={"100%"} 
                    width={"100%"} 
                    label={"company"}
                    header={"Company applied *"}
                    footer={"Ex. Google, Amazon etc."}
                />
                <TextField
                    formData={formData}
                    setFormData={setFormData}
                    errorMsg={errorMsgs}
                    fontSize={fontSize}
                    minWidth={"25%"} 
                    width={"250px"} 
                    label={"salary"}
                    header={"Salary Range *"}
                    footer={"Ex. 90k-120k"}
                />
            </div>
        </div>
    )
}