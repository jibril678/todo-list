const button = document.getElementById("add-task");
button.addEventListener("click", () => createNewTodo());

function createNewTodo() {
  const formText = document.getElementById("new-todo");
  const newTodo = formText.value;
  const text = document.createTextNode(newTodo);
  // const list = document.getElementById("list");
  const listContainer = document.getElementById("list-container")
  const list = document.getElementById("list")
  const listItem = document.createElement("li");


  if (text.length == 0) {
      alert("Please enter a task")
  } else {
    listItem.appendChild(text);
    list.appendChild(listItem);
    listContainer.appendChild(list)
    formText.value = "";
  }

}