import { useEffect } from "react";
import { Link , useParams } from "react-router-dom";
import CategorizeCardContainer from "../CategorizeCard/CategorizeCardContainer";


export default function UrgentTaskContainer({}){

    //make a container that only fetches data
    //so this container pass on the status to take to the list container
    //this container only categorizes the apps //categorizecontainer
    return(
        <>
            <CategorizeCardContainer/>
        </>
    )
}