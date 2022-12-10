 import React from "react";
 import Components from "./Components/Components.js";
 import * as Env from "./environments";
//  import Parse from "parse";

import "./App.css";
import { initializeParse } from "@parse/react";
// import { ChatSetup } from "./Components/LiveChat/ChatSetup";

// Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
// Parse.serverURL = Env.SERVER_URL;

const PARSE_APPLICATION_ID = Env.APPLICATION_ID;
const PARSE_LIVE_QUERY_URL = Env.LIVE_QUERY_URL;
const PARSE_JAVASCRIPT_KEY = Env.JAVASCRIPT_KEY;

// Initialize parse using @parse/react instead of regular parse JS SDK
initializeParse(
  PARSE_LIVE_QUERY_URL,
  PARSE_APPLICATION_ID,
  PARSE_JAVASCRIPT_KEY
);

// function App() {
//   // return <Components />;
//   return <ChatSetup />;
// }

// Below is for ChatSetup
function App() {
  return(
    <div className="App">
      {/* <ChatSetup /> */}
      <Components />
    </div>
  );
}

export default App;

