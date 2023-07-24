import React from "react";
import {createRoot} from "react-dom/client";
import App from "./Components/App";

// Root id element
const Root = document.getElementById("root");

// Render App component inside a div having root id
createRoot(Root).render(<App />);
