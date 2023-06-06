
export default function DataLayout({ children, title }) {

    return (
        <div className="d-flex flex-row gap-3 align-items-center">
            <div>
                {title} :
            </div>
        
            {children}
            
        </div>
    )
}