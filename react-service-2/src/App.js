import React from "react";
import { BrowserRouter, Route, Routes, Outlet, Link } from "react-router-dom";

const S1 = () => <div>Hello service2! s1 component</div>;
const S2 = () => <div>Hello service2! s2 component</div>;
const Service2 = () => <div>Hello service2! Home component</div>;
const RootRoute = () => (
  <div>
    <Outlet />
  </div>
);
const Header = () => (
  <div>
    <Link to="/">service2 Home</Link>
    <br />
    <Link to="/s1">service2 s1 component</Link>
    <br />
    <Link to="/s2">service2 s2 component</Link>
  </div>
);

export default () => {
  return (
    <BrowserRouter basename="service2">
      <Header />
      <hr />
      <Routes>
        {/* <Route path="service2" element={<RootRoute />}> */}
        <Route path={"s1"} element={<S1 />} />
        <Route path={"s2"} element={<S2 />} />
        <Route path={""} element={<Service2 />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
};
