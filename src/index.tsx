import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

function App() {
    return (
        <div className="App">
            <h1>Hello Ciao</h1>
            <h2>Start editing to see some magic happen!</h2>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
