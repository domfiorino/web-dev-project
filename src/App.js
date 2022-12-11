 import React from "react";
 import Components from "./Components/Components.js";
 import * as Env from "./environments";
import "./App.css";
import { initializeParse } from "@parse/react";

const PARSE_APPLICATION_ID = Env.APPLICATION_ID;
const PARSE_LIVE_QUERY_URL = Env.LIVE_QUERY_URL;
const PARSE_JAVASCRIPT_KEY = Env.JAVASCRIPT_KEY;

// Initialize parse using @parse/react instead of regular parse JS SDK
initializeParse(
  PARSE_LIVE_QUERY_URL,
  PARSE_APPLICATION_ID,
  PARSE_JAVASCRIPT_KEY
);

// Below is for ChatSetup
function App() {
  return(
    <div className="App">
      <Components />
    </div>
  );
}

export default App;

