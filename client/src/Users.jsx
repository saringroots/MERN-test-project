import React, { useEffect,useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios';

export default function Users() {
    
    const [users, setUsers] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3001/")
        .then(result =>setUsers(result.data)).catch(err =>console.log(err))
      },[])

    return (
        <div>
            <Link to ="/createuser">Add+</Link> 
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                  
                        {
                            users.map(t => (
                             
                                <tr>
                                    <td>{t.name}</td>
                                    <td>{t.email}</td>
                                    <td>{t.age}</td>
                                    <td>
                                    <Link to ="/updateuser">Edit</Link> 
                                        <button>Delete</button>
                                    </td>
                                </tr>
                            )
                            )
                        }
                    
                </tbody>
            </table>

        </div>
    )
}
// import {useState} from 'react';


// export default function App()
// {
//   var obj=
//   [
//     {
//         id: 2,
//         name:"tst",
//         class:"BE"
//     }
//   ]

//  const [test,testAll] = useState(obj);
// function testclick(id)
//     {
//       alert(id);
//     }

    
//         return(
            
//             <table border="1">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>name</th>
//                 <th>class</th>
//               </tr>
//               </thead>
//               <tbody>
//               {
//                 test.map(t=>(
//               <tr>
//                 <td>{t.id}</td>
//                 <td>{t.name}</td>
//                 <td>{t.class}</td>
//                 <td><input type="button" value="remove" onClick={testclick}/></td>
//               </tr>
//                 ))
//               }
//               </tbody>
//             </table>
//         )
//     }
