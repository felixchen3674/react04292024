//example notes / play around / scratch paper
addButton = document.querySelector('.add_btn')

addButton.addEventListener('click', function () {
    let userInput = document.getElementById('user_input').value

    if (userInput.trim() !== '') {
        let todoList = document.querySelector('.todo_list ul')
        let listItem = document.createElement('li')
        let deleteButton = document.createElement('button')
        deleteButton.textContent = '-'
        deleteButton.classList.add('delete_btn')
        listItem.textContent = userInput
        listItem.appendChild(deleteButton)
        todoList.appendChild(listItem)
        document.getElementById('user_input').value = ''
    }
})

document.addEventListener('click', event => {
    if (event.target.classList.contains('delete_btn')) {
        // delete the parent element which is the <li>
        event.target.parentElement.remove()
    }
})