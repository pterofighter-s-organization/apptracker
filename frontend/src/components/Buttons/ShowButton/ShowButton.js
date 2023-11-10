

//css
import "./ShowButton.css"

export default function ShowButton({ isLoading }) {

    return (
        <div className="show-button">
            {isLoading ? "that's all the content" : "scroll to load more"}
        </div>
    )
}