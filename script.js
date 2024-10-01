// Global Variables
const button = document.getElementById("add-task");
const formText = document.getElementById("new-todo");

function createNewTodo() {
  const newTodo = formText.value;
  const text = document.createTextNode(newTodo);
  const listContainer = document.getElementById("list-container");
  const list = document.getElementById("list");
  const listItem = document.createElement("li");

  if (text.length == 0) {
    alert("Please Enter a Task");
  } else {
    listItem.appendChild(text);
    list.appendChild(listItem);
    listContainer.appendChild(list);
    formText.value = "";
  }
}

// Press Enter To Add Task
formText.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    button.click();
  }
});

button.addEventListener("click", () => createNewTodo());
