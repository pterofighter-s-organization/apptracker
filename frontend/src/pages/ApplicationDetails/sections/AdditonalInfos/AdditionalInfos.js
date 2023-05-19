



export default function AddditionalInfos(props){

    const {
        // application,
        // updateApplication,
        fontSize
    } = props

    return (
        <div className={`d-flex flex-column gap-lg-3 ${fontSize}`}>
            <div className="d-flex flex-column gap-0">
                <div className='h4 text-nowrap'>
                    Additional Info :
                </div>
                <hr className='w-100' />
            </div>
        </div>
    )
}