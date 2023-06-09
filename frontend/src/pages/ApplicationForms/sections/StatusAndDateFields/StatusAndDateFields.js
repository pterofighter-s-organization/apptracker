
//components
import { StatusButton } from "../../../../components/StatusButton"
import { FormFieldFooter } from "../../../../components/FormFieldFooter"
import { FormFieldHeader } from "../../../../components/FormFieldHeader"
import { DateTimeSelect } from "../../../../components/Selects/DateTimeSelect"

//helpers
import * as formHelpers from "../../../../helpers/formHelpers"

export default function StatusAndDateFields({ formData, setFormData, errorMsgs }) {

    return (
        <div className="d-flex flex-wrap gap-3 gap-md-4 align-items-stretch">

            <div className="d-flex flex-column gap-3 bg-body-secondary p-4">
                {/* using flex grow 1 so it can use all the availble space provided by the stretched height. It's good for fields that aren't same height but want to equal the two heights*/}
                <div className="flex-grow-1">
                    <FormFieldHeader header={"Application status"} isRequired={true} />
                </div>
                <div className="flex-grow-1" style={{ width: "100px" }}>
                    <StatusButton
                        value={formData["status"]}
                        updateValue={formHelpers.setInputData(setFormData, "status")}
                    />
                </div>
                <FormFieldFooter
                    footer={"Select a status (interviewing, applied, etc...)"}
                    errorMessage={errorMsgs["status"]}
                    isError={errorMsgs["status"].length > 0}
                />
            </div>

            {formData["status"] !== "interested" ?
                <div className="d-flex flex-column gap-3 bg-body-secondary p-4">
                    <FormFieldHeader header={"Applied date"} isRequired={false} />
                    <DateTimeSelect
                        formData={formData}
                        setFormData={setFormData}
                        label={"applied"}
                    />
                    <FormFieldFooter
                        footer={"Select date in (MM-DD-YYYY) and (hh:mm) in 24 hour format."}
                        errorMessage={errorMsgs["date_applied"]}
                        isError={errorMsgs["date_applied"].length > 0}
                    />
                </div>
                :
                <></>
            }

        </div>
    )
}