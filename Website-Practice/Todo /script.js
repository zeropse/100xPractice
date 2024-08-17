function addTodo() {
  const input = document.getElementById("input");
  const todoList = document.getElementById("toDoList");

  if (input.value) {
    const newTodo = document.createElement("li");
    newTodo.innerHTML = `${input.value} <button type="button" id="rmvbtn" onclick="remove(this)">&#10005</button>`;
    todoList.appendChild(newTodo);
  }
}

function remove(button) {
  const todoList = document.getElementById("toDoList");
  todoList.removeChild(button.parentElement);
}
