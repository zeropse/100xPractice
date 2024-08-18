let todos = [];

function addTodo() {
  const todoText = document.getElementById("input").value.trim();
  if (todoText !== "") {
    todos.push({
      title: todoText,
    });
    document.getElementById("input").value = "";
  } else {
    alert("Please enter an input!");
  }
  render();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  render();
}

function clear() {
  const mainList = document.querySelector(".mainList");
  mainList.innerHTML = "";
  console.log(mainList);
}

function render() {
  const mainList = document.querySelector(".mainList");
  mainList.innerHTML = "";

  todos.forEach((todo, index) => {
    const todoItem = document.createElement("div");
    todoItem.className = "todo-item";

    const todoSpan = document.createElement("span");
    todoSpan.className = "todo-span";
    todoSpan.textContent = todo.title;

    const button = document.createElement("button");
    button.innerHTML = "&#10005";
    button.className = "delete-btn";
    button.setAttribute("type", "button");
    button.setAttribute("onclick", `deleteTodo(${index})`);

    todoItem.appendChild(todoSpan);
    todoItem.appendChild(button);
    mainList.appendChild(todoItem);
  });
}
