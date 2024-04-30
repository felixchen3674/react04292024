document
  .getElementById('todo-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    const input = document.getElementById('todo-input');
    const todoText = input.value.trim();
    if (todoText !== '') {
      addTodo(todoText);
      input.value = ''; // clear input after adding
    }
  });

function addTodo(text) {
  const todoList = document.getElementById('todo-list');
  const todoItem = document.createElement('li');
  todoItem.textContent = text;

  // Checkbox for marking the task as complete
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', function () {
    if (this.checked) {
      todoItem.style.textDecoration = 'line-through';
    } else {
      todoItem.style.textDecoration = 'none';
    }
  });

  // Delete button for removing the task
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '🗑️';
  deleteButton.addEventListener('click', function () {
    todoList.removeChild(todoItem);
  });

  todoItem.prepend(checkbox);
  todoItem.appendChild(deleteButton);
  todoList.appendChild(todoItem);
}
