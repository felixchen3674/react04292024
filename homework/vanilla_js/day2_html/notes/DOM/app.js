// DOM Manipulation


// GetElementById()

// const title = document.getElementById('mainHeading');
// console.log(title)

//GetElementByClassName()

// const listItem = document.getElementsByClassName('listItems');
// console.log(listItem)

//getElementsByTagName()

// const list = document.getElementsByTagName('li')
// console.log(list)

//querySelector()

// const container = document.querySelector('div')
// console.log(container)

//querySelectorAll()

// const container2 = document.querySelectorAll('div');
// console.log(container2)

//Styling elements
// const title = document.querySelector('#mainHeading');
// title.style.color  = "red";

// console.log(title)

// const listItems = document.querySelectorAll('.listItems')

// for(i=0; i < listItems.length; i++){
//     listItems[i].style.fontSize = "2rem";
// }
// console.log(listItems)

//Creating Elements

// const ul = document.querySelector('ul');
// const li = document.createElement('li');
//Adding Elements
// ul.append(li);

//Mod the text

// li.innerText = 'X-man';

// Mod attributes and class

// li.setAttribute('id', 'mainHeading');
// li.removeAttribute('id');

// const title = document.querySelector('#mainHeading')

// console.log(title.getAttribute('id'))

// li.classList.add('listItems')
// li.classList.remove('listItems')

// console.log(li.classList.contains('listItems'))

//Remove Elements

// li.remove()


// Parent Node Traversal

// let ul = document.querySelector('ul');
// console.log(ul.parentNode.parentNode)
// console.log(ul.parentElement.parentElement)
// console.log(ul.childNodes)
// console.log(ul.firstChild)
// console.log(ul.lastChild)

// ul.firstChild.style.backgroundColor = 'blue'
// ul.childNodes[1].style.backgroundColor = 'blue'


// console.log(ul.children)
// console.log(ul.lastElementChild)


//Sibling Node Traversal
// let div = document.querySelector('div');
// console.log(div.childNodes)
// console.log(ul.previousSibling)
// console.log(ul.nextSibling)

// console.log(ul.previousElementSibling)


//Event Listener

//element.addEventLister("click", function, bool)

// const buttonTwo = document.querySelector(".btn-2")
// function alertBtn(){
//     alert('I also love JS')
// }

// buttonTwo.addEventListener("click", alertBtn);


// const newBackgroundColor = document.querySelector(".box3")
// function changeBgColor(){
//     newBackgroundColor.style.backgroundColor='blue'
// }
// newBackgroundColor.addEventListener("mouseover", changeBgColor)

//Reveal Event

const revealBtn = document.querySelector('.revealBtn');
const hiddenContent = document. querySelector('.hiddenContent');

function revealContent() {
    if(hiddenContent.classList.contains('revealBtn')){
        hiddenContent.classList.remove('revealBtn')
    } else{
        hiddenContent.classList.add('revealBtn')
    }
}

revealBtn.addEventListener('click', revealContent);