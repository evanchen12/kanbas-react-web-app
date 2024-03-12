import "./index.css";
import { calender } from "../../../Database";
import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";

function CommingUp() {
  return (
    <>
      <h6><b>Comming Up</b></h6>
      <hr />
      <ul className="wd-comming-up">
        {calender.map((task) => (
          <li key={task._id} className="d-flex">
            <FaCalendarAlt />
            <div>
              <div><Link to="#" className="text-danger">{task.title}</Link></div>
              <div>{task.date}</div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CommingUp;