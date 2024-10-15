import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
//import 'bootstrap/dis/css/bootstrap.min.css'
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';
import Users from './Users';

function App() {
   return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Users/>}></Route>
          <Route path='/createuser' element={<CreateUser />}></Route>
          <Route path='/updateuser' element={<UpdateUser/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
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





