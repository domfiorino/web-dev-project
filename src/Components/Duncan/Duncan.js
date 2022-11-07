import React from "react";
import DuncanForm from "./DuncanForm";

/* HOME MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
export default function DuncanModule() {
  return (
    <div>
      {/* This is the Duncan module. */}
      <h1> Duncan Grille Menu</h1>
      <DuncanForm />
    </div>
  );
}