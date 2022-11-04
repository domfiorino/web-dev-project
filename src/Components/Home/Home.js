import React from "react";
import HomeList from "./HomeList";

/* HOME MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
export default function HomeModule() {
  return (
    <div>
      <hr />
      <h1> Home </h1>

      <HomeList />
    </div>
  );
}

// const HomeModule = () => {
//   return (
//     <div>
//       This is the home module.
//       {/* <HomeList /> */}
//     </div>
//   );
// };

// export default HomeModule;
