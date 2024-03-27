import React, { useEffect, useState } from "react";
import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;

function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
  const [module, setModule] = useState({
    id: 1, name: "NodeJS Module",
    description: "Create a NodeJS server with ExpressJS again",
    course: "RS101"
  });
  const ASSIGNMENT_URL = `${API_BASE}/a5/assignment`;
  const MODULE_URL = `${API_BASE}/a5/module`;

  const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios
      .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);


  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a href={`${API_BASE}/a5/assignment`}>
        Get Assignment
      </a>

      <h4>Retrieving Properties</h4>
      <a href={`${API_BASE}/a5/assignment/title`}>
        Get Title
      </a>

      <h4>Modifying Properties</h4>

      <input onChange={(e) => setAssignment({
            ...assignment, title: e.target.value })}
        value={assignment.title} type="text" />
      <button onClick={updateTitle} >
        Update Title to: {assignment.title}
      </button>
      <button onClick={fetchAssignment} >
        Fetch Assignment
      </button>
      <br/>

      <a href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <input type="text" 
        onChange={(e) => setAssignment({ ...assignment,
            title: e.target.value })}
        value={assignment.title}/>

      <a href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>
        Update Score
      </a>
      <input type="text" 
        onChange={(e) => setAssignment({ ...assignment,
            score: parseInt(e.target.value)})}
        value={assignment.score}/>

      <a href={`${ASSIGNMENT_URL}/complete/${assignment.completed}`}>
        Update Complete Status
      </a>
      <input type="checkbox" 
        onChange={(e) => setAssignment({ ...assignment,
            completed: Boolean(e.target.value)})}
        checked={assignment.completed}/>
      <br/>
      <h4>Modifying Module</h4>
      <a href={ MODULE_URL }>
        Get Module
      </a><br/>

      <a href={`${MODULE_URL}/name`}>
        Get Name
      </a><br/>

      <a href={`${MODULE_URL}/name/${module.name}`}>
        Update Name
      </a>
      <input type="text" 
        onChange={(e) => setModule({ ...module,
            name: e.target.value })}
        value={module.name}/>

      <a href={`${MODULE_URL}/description/${module.description}`}>
        Update Description
      </a>
      <input type="text" 
        onChange={(e) => setModule({ ...module,
            description: e.target.value})}
        value={module.description}/>
    </div>
  );
}
export default WorkingWithObjects;