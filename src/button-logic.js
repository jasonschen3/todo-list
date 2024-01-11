import addTask from "./add";
import completeTask from "./complete-task";

// Creates logic for the 'add' button
const buttonLogic = () => {
  const addButton = document.querySelector("#add");
  addButton.addEventListener("click", () => {
    addTask();
    completeTask();
  });
};

export default buttonLogic;
