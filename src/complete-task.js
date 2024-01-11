const completeTask = () => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("click", (event) => {
      // Use the event target to find the closest li ancestor
      const liContainer = event.target.closest("li");

      // Remove the li element if it exists
      if (liContainer) {
        liContainer.remove();
      } else {
        console.error("The li element was not found.");
      }
    });
  }
};

export default completeTask;
