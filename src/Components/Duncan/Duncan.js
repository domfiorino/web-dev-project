import React from "react";
import DuncanForm from "./DuncanForm";

/* HOME MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
export default function DuncanModule() {
  return (
    <div>
      {/* This is the Duncan module. */}
      <DuncanForm />
    </div>
  );
}

// const DuncanModule = () => {
//   return (
//     <div>
//       This is the Duncan module.
//       {/* <DuncanForm /> */}
//     </div>
//   );
// };

// export default DuncanModule;
