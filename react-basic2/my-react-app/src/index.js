//  Import the React and ReactDOM from libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component
const App = () => {
  const now = new Date();
  const getTime = () => {
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return `${hours > 12 ? hours - 12 : hours} : ${
      minutes < 10 ? "0" + minutes : minutes
    } ${hours < 12 ? "AM" : "PM"}`;
  };
  return (
    <div>
      <div>Current Time:</div>
      <h3>{getTime()}</h3>
    </div>
  );
};

//  Take the react component and show it on thr screen
ReactDOM.render(<App />, document.querySelector("#root"));
