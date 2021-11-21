import React from "react";
/**
 * Component that bundles an input and submit button
 * Props
 * - onChange: function for when the input changes
 * - submit: function for when the button is clicked
 */
export default function Submission(props) {
  return (
    <div>
      <input
        placeholder="Enter a Todo Item Here"
        value={props.value}
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
      ></input>
      <button onClick={() => props.submit()}>Submit</button>
    </div>
  );
}
