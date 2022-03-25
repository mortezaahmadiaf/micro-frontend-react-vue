import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import { createBrowserHistory } from "history";
import Service1 from "./components/Service1";
import Service2 from "./components/Service2";
import VueService from "./components/VueService";

// const history = createBrowserHistory();

const Header = () => (
  <div>
    <Link to="/">home</Link>
    <br />
    <Link to="/service1">service1</Link>
    <br />
    <Link to="/service2">service2</Link>
    <br />
    <Link to="/vue-service">Vue Service</Link> <br />
    {/* <Link to="/">Next Service</Link> */}
  </div>
);
const Home = () => <div>Home</div>;

export default () => {
  return (
    <BrowserRouter>
      <Header />
      <hr />
      <Routes>
        <Route path={"service1"} element={<Service1 />} />
        <Route path={"service2/*"} element={<Service2 />} />
        <Route path={"vue-service/*"} element={<VueService />} />
        <Route path={"/"} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
