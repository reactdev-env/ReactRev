//Nested Elements
const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "I am h1 Tag"),
    React.createElement("h2", {}, "I am h2 Tag")
]), React.createElement("div", {
    id: "child2"
}, [
    React.createElement("h1", {}, "I am h1 Tag"),
    React.createElement("h2", {}, "I am h2 Tag")
]));
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
//Ikkada parent anedi oka object and the object is the react element. The react element becomes the html that browsers understand
//ReactElemnt(object)=> Html(Browser understands)
//if there are more than one child in the object we can wrap inside the [] brackets. The array contains only child elemnts of object.
//const ironman=React.createElement("h1",{},"This is react")
//const Jarvis=ReactDOM.createRoot(document.getElementById("Helix"));
root.render(parent); //Hello world using JS, React
 //Bring react into our code
 //Making sure that scriptis bottom of the body.
 //React element is object => Html browser understands
 //createroot and inject the root into the ReactDOM and rendering the heading or object into the React DOM

//# sourceMappingURL=ReactRev.6bd02f5a.js.map
