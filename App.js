import React from "react"; 
import ReactDOM from "react-dom/client";

//JSX
const jsxheading = (
    <h1 className = "heading">
        This is JSX
    </h1>
);

const Title = () => (
    <h1 className = "head">
        {elem}
        Hello Hello Hello
    </h1>
);

const elem = <span>React Element</span>;

const number  = 1000;

//React Fucn Component
const HeadingComponent = () => (
    <div id = "container">
        <Title></Title>
        <Title/>
        <h2>{number + 100}</h2>
        <h1>This is JSX from a fucntional component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);
root.render(<HeadingComponent/>);