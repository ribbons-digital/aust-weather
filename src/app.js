import React from "react";

// import "./styles/styles.css";
import "./styles/styles.scss";

const greeting = (firstname, lastname) => {
  return (
    <p>
      My name is {firstname} {lastname}
    </p>
  );
};

function App() {
  return (
    <div className="App">
      <h2>Hello! World!</h2>
      {greeting("John", "Smith")}
    </div>
  );
}

export default App;
