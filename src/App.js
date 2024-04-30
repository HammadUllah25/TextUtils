import "./App.css";
import About from "./Components/About";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  //const [mode, setMode] = useState("light");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleModeRed = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "red";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const toggleModeGreen = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "green";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      setInterval(() => {
        document.title = "Hammad is Great";
      }, 2000);
      setInterval(() => {
        document.title = "Click Below!";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    // <Router>
    <>
      <Navbar
        title="TextAwesome"
        aboutText="About TextAwesome"
        mode={mode}
        toggleMode={toggleMode}
        //modeg={modeg}
        toggleModeGreen={toggleModeGreen}
        toggleModeRed={toggleModeRed}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <switch> */}
        {/*
            <Route exact path="/about" element={<About />} />{" "}
            * we will use 'exact path' against 'path' */}
        {/* <Route
              exact
              path="/"
              element={ */}
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" />
        {/* }
            /> */}
        {/* </switch> */}
      </div>
    </>
    // </Router>
  );
}

export default App;
