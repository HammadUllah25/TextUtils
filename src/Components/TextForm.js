import React, { useState } from "react";
import App from "../App";

export default function TextForm(props) {
  //   const UndoClick = () => {
  //     setText(text.length);
  //   };
  const ClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared", "success");
  };
  const HandleeDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };
  const HandleeUpClick = () => {
    //console.log("Uppercase was clicked" + Text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };
  const HandleOnChange = (event) => {
    //console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  //text = "new text"; wrong way to change text...
  //setText("new Text"); write way....
  const HandleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success");
  };
  const HandleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces are Removed", "success");
  };
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={HandleOnChange}
            style={{
              backgroundColor: "black",
              color: props.mode == "light" ? "black" : "white",
            }}
            id="myBox"
            rows="7"
          />
        </div>
        <button className="btn btn-primary mx-1" onClick={HandleeUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={HandleeDownClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={ClearClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-1" onClick={HandleCopy}>
          Copy Button
        </button>
        <button className="btn btn-primary mx-1" onClick={HandleExtraSpaces}>
          Spaces Control
        </button>
      </div>
      <div className="container my-2">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length}Minutes to read.</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
