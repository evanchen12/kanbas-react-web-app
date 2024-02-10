import VariablesAndConstants from "./Variables/VariablesAndConstants";
import VariableTypes from "./Variables/VariableTypes";
import BooleanVariables from "./Variables/BooleanVariables";
import IfElse from "./Conditional/IfElse";
import TernaryOperator from "./Conditional/TernaryOperator";
import WorkingWithFunctions from "./Functions/WorkingWithFunctions";
import WorkingWithArrays from "./Arrays/WorkingWithArrays";
import JsonStringify from "./Json/JsonStringify";
import TemplateLiterals from "./String/TemplateLiterals";
import House from "./Json/House";
import Spreading from "./Json/Spreading";
import Destructing from "./Json/Destructing";
import FunctionDestructing from "./Functions/FunctionDestructing";

function Javascript() {
  console.log("Hello World!");
  return (
    <div>
      <h1>JavaScript</h1>
      <VariablesAndConstants />
      <VariableTypes />
      <BooleanVariables />
      <IfElse />
      <TernaryOperator />
      <WorkingWithFunctions />
      <WorkingWithArrays />
      <JsonStringify />
      <TemplateLiterals />
      <House />
      <Spreading />
      <Destructing />
      <FunctionDestructing />
    </div>
  );
}

export default Javascript;