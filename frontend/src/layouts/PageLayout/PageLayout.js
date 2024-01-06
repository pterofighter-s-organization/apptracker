

//components
import { Navbar } from "../../components/Navbar";

//css
import "./PageLayout.css"

export default function PageLayout({ children }) {

    //how authenticated page is layouted
    return (
        <div className="page-layout">
            <Navbar />
            <div className="page-content">
                {children}
            </div>
        </div>
    )
}