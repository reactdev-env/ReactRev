import React from "react";
import ReactDOM from "react-dom/client";

//Old way of writing create Elemnt in react
const heading= React.createElement("h1",{id:"react"}, "This is the Object");
//const root=ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);


//New way of writing react elemnt in react
const reactJSX=<h1 id="reactJSX">Hello element was created using JSX</h1>
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(reactJSX);


//root.render(heading);