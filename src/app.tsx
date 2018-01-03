// Remember to rename the file from app.ts to app.tsx
// and to keep it in the src/ directory.
import * as React from "react";
import * as ReactDOM from "react-dom";
import Hello from "./Hello";

ReactDOM.render(
  <Hello name="Willson Dear" />,
  document.getElementById("root")
);