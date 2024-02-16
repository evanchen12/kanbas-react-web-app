import Nav from "../Nav";
import Assignment3 from "./a3";
import Assignment4 from "./a4";
import Assignment5 from "./a5";
import {Routes, Route, Navigate} from "react-router";

function Labs() {
  return (
  <>
    <Nav />
    <Routes>
      <Route path="a3" element={<Assignment3 />}></Route>
      <Route path="a4" element={<Assignment4 />}></Route>
      <Route path="a5" element={<Assignment5 />}></Route>
    </Routes>
  </>
  );
}
 
export default Labs;