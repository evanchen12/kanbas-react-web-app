import EncodingParametersInURLs from "./encodingParametersInURLs";
import WorkingWithObjects from "./workingWithObjects";
import WorkingWithArrays from "./workingWithArrays";
const API_BASE = process.env.REACT_APP_API_BASE;

function Assignment5() {
  return (
    <div>
      <h1>Assignment 5</h1>
      <a href={`${API_BASE}/a5/welcome`}>
        Welcome
      </a>
      <EncodingParametersInURLs/>
      <WorkingWithObjects/>
      <WorkingWithArrays/>
    </div>
  );
}

export default Assignment5;