import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// import "./index.css";
// import "./keep.css";
// import FirstName from "./FirstName";
import App from "./App";
import React_router from "./React_router";
import WeatherApp from "./WeatherApp";
import Increment from "./Increment";
import UseContext from "./UseContext";
import Pokemon_home from "./Pokemon_home";

ReactDOM.render(
  // <BrowserRouter>
    <Pokemon_home />
  // </BrowserRouter>
  ,
  document.getElementById("root")
);

// Image gallery concept
// ReactDOM.render(
//    <>
//    <h1 className="headings" >My name is S</h1>
//    <div className="img-pro">
//    <img src = "https://picsum.photos/200/300" alt="random img"/>
//    <img src = "https://picsum.photos/250/300" alt="random img"/>
//    <img src = "https://picsum.photos/300/300" alt="random img"/>
//    </div>
//    </> ,
//    document.getElementById("root")
// );

/*Current Date and Time Code*/
// const fname="s";
// const lname="q";

// const  curDate = new Date().toLocaleDateString();
// const  curTime = new Date().toLocaleTimeString();

// ReactDOM.render( <><h1> { `my name is ${fname} ${lname}`}</h1>

//                    <p>todays date is {curDate}</p>
//                    <p>todays time is {curTime}</p>

//                 </>
// , document.getElementById('root'));
