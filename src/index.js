import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import * as obj from "./math";

console.log(obj);

const myElement = (
  <div>
    <h1>Value of Pi</h1>
    <ol>
      <li>
        <strong>Precision 10 - {obj.pi}</strong>
      </li>
      <li>
        <strong>Precision 3 - {obj.PrecisionTwo()}</strong>
      </li>
      <li>
        <strong>Precision 5 - {obj.PrecisionFive()}</strong>
      </li>
    </ol>
  </div>
);
const root = createRoot(document.getElementById("root"));
root.render(myElement);
