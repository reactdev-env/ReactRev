//Nested Elements

const parent=React.createElement("div", {id:"parent"}, React.createElement("div", {id:"child"}, React.createElement("h1",{},"I am h1 Tag")));
console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));




//const ironman=React.createElement("h1",{},"This is react")
//const Jarvis=ReactDOM.createRoot(document.getElementById("Helix"));
root.render(parent);