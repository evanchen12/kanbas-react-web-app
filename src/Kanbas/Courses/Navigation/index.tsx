import { Link, useLocation } from "react-router-dom";
import "./index.css"; // feel free to use the CSS from previous assignments
import { FaHouseDamage, FaHome, FaPlug, FaNetworkWired, FaPencilAlt, FaRocket, FaAddressBook, FaUserAlt, FaCommentAlt, FaBullhorn, FaFile, FaFolder, FaAddressCard, FaCheckCircle, FaUserCircle, FaBook, FaCog } from "react-icons/fa";

const links = [
  {label: "Home", icon: <FaHome className="ms" />}, 
  {label: "Modules", icon: <FaNetworkWired className="ms" />}, 
  {label: "Piazza", icon: <FaPlug className="ms" />}, 
  {label: "Zoom Meetings", icon: <FaPlug className="ms" />}, 
  {label: "Assignments", icon: <FaPencilAlt className="ms" />}, 
  {label: "Quizzes", icon: <FaRocket className="ms" />},               
  {label: "Grades", icon: <FaAddressCard className="ms" />}, 
  {label: "People", icon: <FaUserAlt className="ms" />}, 
  {label: "Panopto Video", icon: <FaPlug className="ms" />}, 
  {label: "Discussions", icon: <FaCommentAlt className="ms" />}, 
  {label: "Announcements", icon: <FaBullhorn className="ms" />}, 
  {label: "Pages", icon: <FaFile className="ms" />},             
  {label: "Files", icon: <FaFolder className="ms" />}, 
  {label: "Rubrics", icon: <FaAddressBook className="ms" />}, 
  {label: "Outcomes", icon: <FaCheckCircle className="ms" />}, 
  {label: "Collaborations", icon: <FaUserCircle className="ms" />}, 
  {label: "Syllabus", icon: <FaBook className="ms" />}, 
  {label: "Settings", icon: <FaCog className="ms" />}
];

function CourseNavigation() {
  const { pathname } = useLocation();
  const pathnameClean = pathname.replace(/[^A-Za-z]+/g, ' ');


  return (
    <ul className="wd-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathnameClean.includes(link.label) ? "wd-active" : ""}>
          <Link to={link.label}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
}

function HeaderCourseNavigation() {
  const { pathname } = useLocation();
  const pathnameClean = pathname.replace(/[^A-Za-z]+/g, ' ');

  return (
    <ul className="wd-navigation-h">
      {links.map((link, index) => (
        <li key={index} className={pathnameClean.includes(link.label) ? "wd-active-h" : ""}>
          <Link to={link.label}>
            {link.icon} {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export { CourseNavigation, HeaderCourseNavigation };