import React from "react";
import ReactDOM from "react-dom/client";
import Comp1 from "./Comp1";


//New way of writing react elemnt in react
const reactJSX=<h1 id="reactJSX">Hello element was created using JSX</h1>
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Comp1/>);




