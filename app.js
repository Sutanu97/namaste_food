 const root = ReactDOM.createRoot(document.getElementById("root"));
 const header = ReactDOM.createRoot(document.getElementById("header"));

 const heading  = React.createElement("h1", {id : "heading"} , "Header : Hello world from React");
 
 const content = React.createElement("div", {id : "content"}, 
 [React.createElement("div", {id : "child-content-1"}, React.createElement("p",{}, "this is a paragraph")),
  React.createElement("div", {id : "child-content-2"}, React.createElement("p",{}, "this is a paragraph"))]);
 
 const parent = React.createElement("div", {id : "parent"}, content);
 root.render(parent);
 header.render(heading);
