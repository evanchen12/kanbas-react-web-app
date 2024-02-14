/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import "./index.css";

function Dashboard() {
  return (
    <div className="p-4">
      <h1>Dashboard</h1>              <hr />
      <h2>Published Courses ({courses.length})</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <Link to={`/Kanbas/Courses/${course._id}/Home`}>  
                  <img src={`/images/${course.image}`} className="card-img-top"
                        style={{ height: 150 }}/>
                </Link>
                <div className="card-body ellipsis">
                  <Link to={`/Kanbas/Courses/${course._id}/Home`}>
                    <div className="card-title">{course.name}</div>
                    <p className="card-text ellipsis fontsize">{course.name}</p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;