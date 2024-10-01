// Global Variables
const button = document.getElementById("add-task");
const formText = document.getElementById("new-todo");

// Create new task
function createNewTodo() {
  const newTodo = formText.value;
  const list = document.getElementById("list");

  if (newTodo.length == 0) {
    alert("Please Enter a Task");
    return;
  }

  // Create list items and checkbox
  const listItem = document.createElement("li");
  listItem.classList.add("list-item");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const textSpan = document.createElement("span");
  textSpan.textContent = newTodo

  // Create a delete task button
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.textContent = "X";

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        textSpan.classList.add("task-complete"); // Add strikethrough to text span
    } else {
        textSpan.classList.remove("task-complete"); // Remove strikethrough from text span
    }
});

  deleteButton.addEventListener("click", () => {
    listItem.remove();
  });

  // Append item's to the list
  listItem.appendChild(checkbox);
  listItem.appendChild(textSpan);
  listItem.appendChild(deleteButton);

  list.appendChild(listItem);

  // Clear input field
  formText.value = "";
}

// Press 'enter' to add task
formText.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    button.click();
  }
});

button.addEventListener("click", () => createNewTodo());
