//GetElementById()
const title = document.getElementById('main-heading');
console.log(title);

//GetElementsByClassName()
// const listItem = document.getElementsByClassName('list-items');
// console.log(listItem);

//GetElementByTagName()
const listItem = document.getElementsByTagName('li');
console.log(listItem);

//querySelector()
const container = document.querySelector('ul li');
console.log(container);

//querySelectorAll()
const containers = document.querySelectorAll('ul li');
console.log(containers);

//element.addEventListener("click", function)
const button2 = document.querySelector('.btn-2');
button2.addEventListener('click', (e) => {
  console.log(e.target.innerHTML);
});

const newBackgroundColor = document.querySelector('.box3');
newBackgroundColor.addEventListener('mouseover', () => {
  newBackgroundColor.style.backgroundColor = 'blue';
});

//How To USE ClassList
// const div = document.createElement("div");
// div.className = "foo";

// // our starting state: <div class="foo"></div>
// console.log(div.outerHTML);

// // use the classList API to remove and add classes
// div.classList.remove("foo");
// div.classList.add("anotherclass");

// // <div class="anotherclass"></div>
// console.log(div.outerHTML);

// // if visible is set remove it, otherwise add it
// div.classList.toggle("visible");

// // add/remove visible, depending on test conditional, i less than 10
// div.classList.toggle("visible", i < 10);

// // false
// console.log(div.classList.contains("foo"));

// // add or remove multiple classes
// div.classList.add("foo", "bar", "baz");
// div.classList.remove("foo", "bar", "baz");

// // add or remove multiple classes using spread syntax
// const cls = ["foo", "bar"];
// div.classList.add(...cls);
// div.classList.remove(...cls);

// // replace class "foo" with class "bar"
// div.classList.replace("foo", "bar");

//What is propagation in javascript?
//https://www.loginradius.com/blog/engineering/javascript-events-bubbling-capturing-and-propagation/

//What is Delegation in Javascript?
//https://www.freecodecamp.org/news/event-delegation-javascript/

//matches(selector):
// Checks if the event target matches the given CSS selector.
// Example: if (event.target.matches('.button')) { ... }
// closest(selector):
// Returns the closest ancestor of the current element (or the current element itself) which matches the selector provided in parameter. If there is no such ancestor, it returns null.
// Example: const container = event.target.closest('.container');
// getAttribute(attributeName):
// Returns the value of a specified attribute on the element. If the given attribute does not exist, the value returned will either be null or "" (the empty string).
// Example: const type = event.target.getAttribute('type');
// setAttribute(attributeName, value):
// Sets a new value for an attribute on the specified element.
// Example: event.target.setAttribute('disabled', 'disabled');
// removeAttribute(attributeName):
// Removes an attribute from the specified element.
// Example: event.target.removeAttribute('disabled');
// addEventListener(type, listener [, options]):
// Sets up a function that will be called whenever the specified event is delivered to the target.
// Example: event.target.addEventListener('click', handlerFunction);
// removeEventListener(type, listener [, options]):
// Removes an event listener from the element.
// Example: event.target.removeEventListener('click', handlerFunction);
// classList (property):
// Provides access to the class list of the target element. It has methods like add(), remove(), toggle(), and contains().
// Example: event.target.classList.add('active');
localStorage.setItem('name', 'zhe');
localStorage.removeItem('name');
console.log(localStorage.getItem('isLoggedIn'));
localStorage.removeItem('isLoggedIn');
sessionStorage.setItem('name', 'Li');
document.cookie = 'name=zhe;expires=' + new Date(2024, 4, 29).toUTCString();
