import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";

const FetchExample = () => {
  const [data, setData] = useState(false);

  useEffect(() => {
    fetch("https://api64.ipify.org")
      .then(response => response.text())
      .then(ip => {
        setData(ip);
      });
  });

  if (data === false) {
    return <h1>Ustalam adres IP...</h1>;
  } else {
    return <h1>Twoje IP: {data}</h1>;
  }
};

const App = () => <FetchExample />;

ReactDOM.render(<App />, document.getElementById("app"));


// const API = "http://localhost:3000";
 
// fetch(`${API}/cars/1`)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });