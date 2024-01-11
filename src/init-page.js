import completeTaskLogic from "./complete-task";
import addTask from "./add";
import addButtonLogic from "./button-logic";

const init = () => {
  // Append the necessary components for each
  addTask();
  addTask();
  addTask();

  completeTaskLogic();
  addButtonLogic();
};

export default init;
