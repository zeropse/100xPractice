let todos = [];
let todoNumber = 0;

function addTodo() {
  const todoText = document.getElementById("input").value.trim();
  if (todoText !== "") {
    todoNumber++; 
    todos.push({
      title: todoText,
    });
    document.getElementById("input").value = "";
    console.log(`Todo #${todoNumber} Added!!`);
  } else {
    alert("Please enter an input!!!");
  }
  render();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  render();
  console.log("Todo Deleted!!");
}

function clearTodo() {
  const mainList = document.querySelector(".mainList");
  mainList.innerHTML = "";
  console.log("Todo List Cleared!!")
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