const form = document.getElementById("todoForm");
const ul = document.getElementById("todolist");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoData = document.getElementById("todoInput").value;
  if (todoData.trim() === "") {
    return;
  }
  const li = document.createElement("li");
  const label = document.createElement("label");
  label.for = "todoItems";
  label.innerHTML = todoData;
  const liInput = document.createElement("input");
  liInput.type = "checkbox";
  liInput.value = todoData;
  liInput.id = todoData;
  liInput.name = "todoItems";
  const btn = document.createElement("button");
  btn.innerHTML = "delete";
  btn.className = "deleteBTN";
  li.append(liInput);
  li.append(label);
  li.append(btn);
  ul.append(li);
  document.getElementById("todoInput").value = "";
});
ul.addEventListener("click", (e) => {
  console.log(e.target.classList.contains("deleteBTN"));
  if (e.target.classList.contains("deleteBTN")) {
    const li = e.target.closest("li");
    li.remove();
  }
});

const arr1 = [..."317111"];
console.log(arr1);
