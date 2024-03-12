import "./index.css";
import { todo } from "../../../Database";
import { Link } from "react-router-dom";
import { FaCircle } from "react-icons/fa";

function Todo() {
  return (
    <>
      <h6><b>To Do</b></h6>
      <hr />
      <ul className="wd-todo">
        {todo.map((task) => (
          <li key={task._id} className="d-flex">
            <FaCircle style={{ color: "red" }}/>
            <div>
              <div><Link to="#" className="text-danger">{task.task}
              </Link></div>
              <div>
                {task.points} points <FaCircle style={{ fontSize: "5px" }}/> {task.date}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;