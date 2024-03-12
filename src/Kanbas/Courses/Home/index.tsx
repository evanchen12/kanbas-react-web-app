import ModuleList from "../Modules/list";
import StatusButtons from "./StatusButtons";
import Todo from "./Todo";
import CommingUp from "./CommingUp";
import "./index.css";
import { FaEllipsisV } from "react-icons/fa";

function Home() {
  return (
    <div className="d-flex">
      <div className="flex-fill wd-main-body">
        <div className="wd-buttons">
          <button type="button">Collapse All</button>
          <button type="button">View Progress</button>
          <select id="select-one">
            <option value="All">Publish All</option>
            <option value="This">Publish This</option>
          </select>
          <button className="bg-danger text-white" type="button">
            + Module</button>
          <button type="button"><FaEllipsisV /></button>
          <hr />
        </div>
        <ModuleList />
      </div>
      
      <div className="flex-grow-0 me-2 d-none d-xl-block">
        <h6>Course Status</h6>
        <StatusButtons />
        <Todo />
        <CommingUp />
      </div>
    </div>
  );
}
export default Home;