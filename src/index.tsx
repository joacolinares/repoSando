import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css"




// Create a root.
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

// During an update, there is no need to pass the container again
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);