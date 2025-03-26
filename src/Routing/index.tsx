import { Route, Routes } from "react-router-dom";
import Home from "@/components/templates/Home";
import Employees from "@/components/templates/Employees";
import Error from "@/components/templates/Error";

const Routing = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/employees" element={<Employees />} />
    <Route path="/*" element={<Error />} />
  </Routes>
);

export default Routing;
