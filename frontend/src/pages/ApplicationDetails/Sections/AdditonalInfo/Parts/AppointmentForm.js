//components
import AppointmentForm from "../../../../../components/AppointmentForm/AppointmentForm";

export default function ApplicationForm({ setAppointment }) {

    //make this into component * later
    
    return (
        <div className="d-flex flex-wrap gap-3 gap-md-4 gap-xl-5 align-items-center bg-body-secondary p-4 fs-4">
            <div className="d-flex flex-column gap-3 w-100">
                <div className="">
                    Tracking a new appointment :
                    <hr className="" />
                </div>
                <div className="">
                    <AppointmentForm
                        setAppointment={setAppointment}
                        fontSize={"fs-6"}
                    />
                </div>
            </div>
        </div>
    )
}