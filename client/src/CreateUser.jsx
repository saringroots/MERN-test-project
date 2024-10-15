import React, { useEffect, useState } from "react"
import axios from 'axios';

export default function CreateUser()
{
   const [name,setName] =useState()
   const [email,setEmail] =useState()
   const [age,setAge] =useState()

   const Submit=(e)=>
   {
         e.preventDefault();
         axios.post("http://localhost:3001/createuser",{name,email,age})
         .then(result=>console.log(result))
         .catch(err=>console.log(err))
   }
   

    return(
        <div>
      <form onSubmit={Submit}>
       
            <tr>
                <td>Name</td>
                <td><input type="text" name="tname" onChange={(e)=>setName(e.target.value)}></input></td>
            </tr>
            <tr>
                <td>Email</td>
                <td><input type="text" name="temail" onChange={(e)=>setEmail(e.target.value)}></input></td>
            </tr>
            <tr>
                <td>Age</td>
                <td><input type="text" name="tage" onChange={(e)=>setAge(e.target.value)}></input></td>
            </tr>
            <tr>
                <td><button name="tbutton">Submit</button></td>
            </tr>
        
            </form>
        </div>
    )
}
