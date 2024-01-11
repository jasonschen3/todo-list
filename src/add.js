const add = () => {
  const $list = document.querySelector("ul");

  // Creating new items
  const newItem = document.createElement("li");

  const newTask = document.createElement("div");
  const newCheckbox = document.createElement("input");
  newCheckbox.type = "checkbox";
  const newTitle = document.createElement("input");
  newTitle.placeholder = "title";
  const newDescription = document.createElement("input");
  newDescription.placeholder = "description";
  newDescription.classList.add("description");
  const newDate = document.createElement("input");
  newDate.type = "date";
  const newPriority = document.createElement("select");

  newTask.appendChild(newCheckbox);
  newTask.appendChild(newTitle);
  newTask.appendChild(newDescription);
  newTask.appendChild(newDate);
  newTask.appendChild(newPriority);

  const arr = ["", "important", "not-priority"];
  for (let i = 0; i < arr.length; i++) {
    const newOption = document.createElement("option");

    newOption.textContent = arr[i];

    newPriority.appendChild(newOption);
  }

  newTask.classList.add("input-container");
  newItem.appendChild(newTask);
  $list.appendChild(newItem);
};

export default add;
