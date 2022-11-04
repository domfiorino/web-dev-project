import React from "react";
import HomeModule from "./Home/Home.js";
import DuncanModule from "./Duncan/Duncan.js";
import NavigationModule from "./Navigation/Navigation";
// import BrowserRouter as alias
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Components = () => {
  return (
    <Router>
      <NavigationModule />
      <Routes>
        {/* Home Page - page 1 */}
        <Route path="/" element={<HomeModule />} />
        {/* Duncan menu page - page 2 */}
        <Route path="/Duncan" element={<DuncanModule />} />
      </Routes>
    </Router>
  );
  // return (
  //   <div>
  //     <HomeModule />
  //     <DuncanModule />
  //   </div>
  // );
};

export default Components;
