const button = document.getElementById("create-button");

function createNewTodo() {
  const formText = document.getElementById("new-todo");
  const newTodo = formText.value
  const text = document.createTextNode(newTodo);

  const list = document.getElementById("list");
  const listItem = document.createElement("li");

  listItem.appendChild(text);
  list.appendChild(listItem);
  formText.value = ""
}

button.addEventListener("click", () => createNewTodo());
