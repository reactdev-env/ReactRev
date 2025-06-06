//Nested Elements

const parent=React.createElement("div", {id:"parent"}, React.createElement("div", {id:"child"}, 
[React.createElement("h1",{},"I am h1 Tag"),React.createElement("h2",{},"I am h2 Tag")]));
console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));


//Ikkada parent anedi oka object and the object is the react element. The react element becomes the html that browsers understand

//ReactElemnt(object)=> Html(Browser understands)
//if there are more than one child in the object we can wrap inside the [] brackets. The array contains only child elemnts of object.

//const ironman=React.createElement("h1",{},"This is react")
//const Jarvis=ReactDOM.createRoot(document.getElementById("Helix"));
root.render(parent);