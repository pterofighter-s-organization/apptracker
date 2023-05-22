
//components
import TextField from "../../../../../components/Inputs/Text/TextField"


export default function BasicInfosEdit(props) {

    const {
        formData,
        setFormData,
        fontSize,
        errorMsgs
    } = props

    return (
        <div className="d-flex flex-column bg-body-secondary gap-2 w-100 p-4">

            {/* title of basic info */}
            <div className="d-flex flex-column gap-0">
                <div className='h5 text-nowrap'>
                    Job information :
                </div>
                <hr className='w-100' />
            </div>

            <div className="d-flex flex-column gap-3" style={{ minWidth: "100%", width: "100%", maxWidth: "100vw" }}>
                <TextField
                    formData={formData}
                    setFormData={setFormData}
                    label={"position"}
                    fontSize={fontSize}
                    header={"Position applied *"}
                    footer={"Ex: (Software Engineer, Web Developer, etc...)"}
                    errorMsgs={errorMsgs}
                />
            </div>
            <div className="d-flex flex-column gap-3" style={{ minWidth: "100%", width: "100%", maxWidth: "100vw" }}>
                <TextField
                    formData={formData}
                    setFormData={setFormData}
                    label={"company"}
                    fontSize={fontSize}
                    header={"Company applied *"}
                    footer={"Ex: (Google, Amazon, etc...)"}
                    errorMsgs={errorMsgs}
                />
            </div>
            <div className="d-flex flex-column gap-3" style={{ minWidth: "300px", width: "300px", maxWidth: "100vw" }}>
                <TextField
                    formData={formData}
                    setFormData={setFormData}
                    label={"salary"}
                    fontSize={fontSize}
                    header={"Salary listed *"}
                    footer={"Ex: (20k-30k)"}
                    errorMsgs={errorMsgs}
                />
            </div>

        </div>
    )
}