

export default function FormFieldHeader({ header, isRequired }) {

    return (
        <>
            {isRequired ?
                <div>
                    {header} *
                </div>
                :
                <div>
                    {header}
                </div>
            }
        </>
    )
}