import React from 'react';
import axios from "axios";
import { useState } from 'react'

const HomePage = () => {
  const [Data, setData] = useState(null)
  function getData() {
    axios({
      method: "GET",
      url:"/home",
    })
    .then((response) => {
      const res =response.data
      setData(({
        about_app: res.about}))
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })}

  return (
    <div>
      <header>
        <h1>My Simple React Home Page</h1>
      </header>
      <main>
        <p>Welcome to my simple React home page! This is a basic example of a React project.</p>
        <p>To get your profile details: </p><button onClick={getData}>Click me</button>
        {Data && 
            <div>
                <p>About me: {Data.about_app}</p>
            </div>}
      </main>
    </div>
  );
}

export default HomePage;