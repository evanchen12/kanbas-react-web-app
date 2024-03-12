import ModuleList from "./list";
import "./index.css";

function Modules() {
  return (
    <div className="wd-main-body">
      <div className="wd-buttons">
        <button type="button">Collapse All</button>
        <hr />
      </div>
      <ModuleList />
    </div>
  );
}
export default Modules;