import { useEffect } from "react";

//css
import "./NumericInput.css"

export default function NumericInput({ name, value, handleChange }) {

    useEffect(() => {
        //this is to prevent the numeric input from having the scroll wheel cause is causing mistakes from accidental scrolling.
        const handleScrolling = (e) => {
            if (document.activeElement.type === "number" && document.activeElement.classList.contains("numeric-input-field")) {
                document.activeElement.blur();
            }
        }

        document.addEventListener("wheel", handleScrolling);

        return () => document.removeEventListener("wheel", handleScrolling)
    }, [])

    return (
        <input
            type="number"
            name={name}
            className={`numeric-input-field input-field`}
            placeholder={"###"}
            value={value}
            onChange={handleChange}
        />
    )
}