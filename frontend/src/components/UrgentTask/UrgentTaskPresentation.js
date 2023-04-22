import { Link } from "react-router-dom";

export default function UrgentTaskPresentation() {
    //temp navbar for testing purposes
    //col-1 = task number
    //col-2 = task type
    //col-3 = actual date
    //col-4 = days left
    //col-5 = link button

    return (
        <>
            <table class="table m-5">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Type</th>
                        <th scope="col">Date</th>
                        <th scope="col">Days Left</th>
                        <th scope="col">Link to App</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}