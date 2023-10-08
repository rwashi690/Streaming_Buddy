//import { useState } from 'react'
//import logo from './logo.svg';
//import './App.css';
//import axios from "axios";
import React from 'react';
import HomePage from './components/HomePage'


function App() {
  return (
    <div>
      <HomePage/>
    </div>
  );

//   const [Data, setData] = useState(null)
//   function getData() {
//     axios({
//       method: "GET",
//       url:"/home",
//     })
//     .then((response) => {
//       const res =response.data
//       setData(({
//         about_app: res.about}))
//     }).catch((error) => {
//       if (error.response) {
//         console.log(error.response)
//         console.log(error.response.status)
//         console.log(error.response.headers)
//         }
//     })}

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <p>To get your profile details: </p><button onClick={getData}>Click me</button>
//         {Data && <div>
//               <p>About me: {Data.about_app}</p>
//             </div>
//         }
//       </header>
//     </div>
//   );
 }

export default App;
