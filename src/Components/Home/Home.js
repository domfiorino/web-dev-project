import React from "react";
import HomeList from "./HomeList";

/* HOME MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
export default function HomeModule() {
  return (
    <div>
      
      <h1> Home </h1>

      <HomeList />
    </div>
  );
}