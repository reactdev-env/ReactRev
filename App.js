import React from "react";
import ReactDOM from "react-dom/client";
import Comp1 from "./Comp1";


const Comp2=()=>{
    return(
        <div>
            <h1>This is the Comp2</h1>
        </div>
    )
}

const Comp3=()=>{
    return(
        <div>
            <Comp2/>
            <h1>This is the Comp3</h1>
        </div>
    )
}

//Now I need to put comp2 in Comp3


//New way of writing react elemnt in react
//const reactJSX=<h1 id="reactJSX">Hello element was created using JSX</h1>
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Comp3/>);




