import React from "react"


export default function UpdateUser()
{
    return(
        <div>
           <table>
            <tr>
                <td>Name</td>
                <td><input type="text" name="tname"></input></td>
            </tr>
            <tr>
                <td>Email</td>
                <td><input type="text" name="temail"></input></td>
            </tr>
            <tr>
                <td>Age</td>
                <td><input type="text" name="tage"></input></td>
            </tr>
            <tr>
                <td><button name="tbutton">Update</button></td>
            </tr>
        </table>
        </div>
    )
}
