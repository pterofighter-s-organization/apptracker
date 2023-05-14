//sub-components
import TaskFormFields from "./components/FormFields/TaskFormFields";

export default function TaskForm(props) {

    const {
        setTask,
        fontSize,
        showSuccessModal,
        closeModal,
    } = props

    //the outside layer and dealing with errors when it happens

    //add later. changing size for the title, and make a modal for errors*

    return (
        <div className="d-flex flex-wrap gap-3 gap-md-4 gap-xl-5 align-items-center bg-body-secondary p-4 fs-4">
            <div className="d-flex flex-column gap-3 w-100">
                <div className="">
                    Tracking a new task :
                    <hr className="" />
                    <div className="fs-6">
                        * is Required
                    </div>
                </div>
                <TaskFormFields
                    setTask={setTask}
                    fontSize={fontSize}
                    showSuccessModal={showSuccessModal}
                    closeModal={closeModal}
                />
            </div>
        </div>
    )

}