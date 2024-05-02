const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
// console.log(todoInput);
addBtn.addEventListener('click', addToList);

function addToList() {
  const listText = todoInput.value;
  // console.log(listText);
  if (listText !== '') {
    const listItem = document.createElement('li');
    const listName = document.createElement('span');
    //need span as x box needs to be inline. tried p but p is block
    const deleteButton = document.createElement('button');
    console.log(deleteButton);

    listName.textContent = listText;
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', removedFunction);
    function removedFunction() {
        todoList.removeChild(listItem);
    }

    listItem.appendChild(listName);
    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);

    todoInput.value = '';
  }
}