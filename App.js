const heading = React.createElement("h1", {id:"heading"}, "Hello World from react!");
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);