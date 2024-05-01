document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.submitBtn');
    const inputElement = document.querySelector('.todoInput'); 
    const ul = document.querySelector('#present');

    btn.addEventListener('click', function(event) {
        event.preventDefault(); 
        const input = inputElement.value;

        if (input.trim() !== '') {
            const div = document.createElement('div');
            const listItem = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            const text = document.createTextNode(input);
            div.appendChild(checkbox);
            div.appendChild(text);
            listItem.appendChild(div);

            const deleteButton = document.createElement('button');
            const i = document.createElement('i');
            i.classList.add('fa', 'fa-trash');
            deleteButton.appendChild(i);
            deleteButton.onclick = function() {
                listItem.remove();
            };
            listItem.appendChild(deleteButton);

            ul.appendChild(listItem);

            inputElement.value = '';
        } else {
            alert('Please enter something');
        }
    });
});
