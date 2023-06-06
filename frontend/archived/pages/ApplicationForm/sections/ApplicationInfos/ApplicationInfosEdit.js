//components
import BasicInfosEdit from "./BasicInfos/BasicInfosEdit"
import DescriptionEdit from "./Description/DescriptionEdit"
import LinkInfosEdit from "./LinkInfos/LinkInfosEdit"


export default function ApplicationInfosEdit(props) {

    const {
        formData,
        setFormData,
        fontSize,
        errorMsgs
    } = props

    return (
        <div className="d-flex flex-column gap-lg-3">

            {/* title */}
            <div className="d-flex flex-column gap-0 mb-3">
                <div className='h4 text-nowrap'>
                    New Application Infos:
                </div>
                <hr className='w-100' />
                <div className="">
                    * ( required fields )
                </div>
            </div>

            <div className="d-flex flex-column gap-3 gap-md-4 gap-xl-5">
                {/* basic info and links */}
                {/* start (1) : */}
                <div className="d-flex flex-column flex-xl-row align-items-stretch gap-3 gap-md-4 gap-xl-5">

                    {/* basic info */}
                    <BasicInfosEdit
                        formData={formData}
                        setFormData={setFormData}
                        fontSize={fontSize}
                        errorMsgs={errorMsgs}
                    />

                    {/* links info */}
                    <LinkInfosEdit
                        formData={formData}
                        setFormData={setFormData}
                        fontSize={fontSize}
                        errorMsgs={errorMsgs}
                    />

                </div>
                {/* end of (1) */}

                {/* description */}
                <DescriptionEdit
                    formData={formData}
                    setFormData={setFormData}
                    fontSize={fontSize}
                />

            </div>

        </div>
    )
}