import React from "react";
import { BrowserRouter, Route, Routes, Outlet, Link } from "react-router-dom";

const S1 = () => <div>Hello service1! s1 component</div>;
const S2 = () => <div>Hello service1! s2 component</div>;
const Service1 = () => <div>Hello service1! Home component</div>;
// const RootRoute = () => (
//   <div>
//     <Outlet />
//   </div>
// );

const Header = () => (
  <div>
    <Link to="/">service1 Home</Link>
    <br />
    <Link to="/s1">service1 s1 component</Link>
    <br />
    <Link to="/s2">service1 s2 component</Link>
  </div>
);
export default () => {
  return (
    <BrowserRouter basename="service1">
      <Header />
      <hr />
      <Routes>
        {/* <Route path="service1" element={<RootRoute />}> */}
        <Route path={"s1"} element={<S1 />} />
        <Route path={"s2"} element={<S2 />} />
        <Route path={""} element={<Service1 />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
};
