import DescriptionField from "./Description/DescriptionField"
import LinksField from "./LinksInfo/LinksFields"
import NamesField from "./NamesInfo/NamesField"



export default function ApplicationInfoFields(props) {

    const {
        linkData,
        setLinkData,
        appData,
        setAppData,
        fontSize,
        errorMsgs
    } = props

    return (
        <div
            className="d-flex flex-column gap-lg-3 fs-5"
        >
            <div className="d-flex flex-column gap-0">
                <div className='h3 text-nowrap'>
                    Application Info :
                </div>
                <hr className='w-100' />
            </div>
            <div className="d-flex flex-column gap-3 gap-md-4 gap-xl-5">
                {/* <div className="d-flex flex-column flex-xl-row align-items-stretch gap-3 gap-md-4 gap-xl-5">
                    <NamesField
                        formData={formData}
                        setFormData={setFormData}
                        fontSize={fontSize}
                        errorMsgs={errorMsgs}
                    />
                    <LinksField
                        formData={formData}
                        setFormData={setFormData}
                        fontSize={fontSize}
                        errorMsgs={errorMsgs}
                    />
                </div> */}
                <div className="d-flex flex-column flex-xl-row align-items-stretch gap-3 gap-md-4 gap-xl-5">
                    <NamesField
                        formData={appData}
                        setFormData={setAppData}
                        fontSize={fontSize}
                        errorMsgs={errorMsgs}
                    />
                    <LinksField
                        formData={linkData}
                        setFormData={setLinkData}
                        fontSize={fontSize}
                        errorMsgs={errorMsgs}
                    />
                </div>
                <DescriptionField
                    formData={appData}
                    setFormData={setAppData}
                    fontSize={fontSize}
                    errorMsgs={errorMsgs}
                />
            </div>
        </div>
    )
}