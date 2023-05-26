
export default function FormFieldFooter({ errorMessage, footer, isError }) {

    //if is an error, show the error message, other then show the footer intented
    return (
        <>
            {isError ?
                <div className={`blockquote-footer text-danger mt-1`}>
                    {errorMessage}
                </div>
                :
                <div className={`blockquote-footer mt-1`}>
                    {footer}
                </div>
            }
        </>
    )

}