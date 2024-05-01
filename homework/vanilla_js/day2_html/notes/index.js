// This is my first notes
// <section> defines a section in document

// <article> element specifies independent, self-contained content

// <header> element represents a container for introductory content or a set of navigational links

// <footer> element defines a footer for a document or section

// <nav> defines a set of navigation links

// <aside> element defines some content aside from the content it is placed on

// <figure> tag specifies self-contained content, like illustrations, diagrams, photos, code listing, etc

// <details> defines additional details that the user can view or hide

// <figure> specifies self-contained content, like illustraions, diagrams, photos, code listings

// <summary> defines a visible heading for a <details> element

// <main> specifies the main content of a document

// <mark> defines marked/highlighted text

// DOM stands for document object model. It is used to manipulate content, sytle, and structure. It is one of the most unique and useful tools of javascript.

// getElementById
// Usage: document.getElementById(id)
// Purpose: Selects a single element with the specified ID.
// Return Type: Returns the first element with the specified ID or null if no such element exists. As IDs should be unique within a page, it returns only one element.
// getElementsByClassName
// Usage: document.getElementsByClassName(className)
// Purpose: Selects all elements that have a specified class name.
// Return Type: Returns a live HTMLCollection of found elements. It will update automatically if the DOM changes.
//getElementsByTagName
// Usage: document.getElementsByTagName(tagName)
// Purpose: Selects all elements with the specified tag name.
// Return Type: Returns a live HTMLCollection of elements with the specified tag name. Like getElementsByClassName, the HTMLCollection is live.
// querySelector
// Usage: document.querySelector(selectors)
// Purpose: Selects the first element that matches a specified CSS selector(s).
// Return Type: Returns the first matching element or null if there are no matches. It can select by ID, class, tag name, or any complex CSS selector.
// querySelectorAll
// Usage: document.querySelectorAll(selectors)
// Purpose: Selects all elements that match a specified CSS selector(s).
// Return Type: Returns a static NodeList of found elements. Unlike HTMLCollection, NodeList is not live, meaning it does not reflect changes to the DOM.

// Event Listeners: An event listener in JavaScript is a function that waits for a specific event to occur and executes a piece of code in response. You can attach event listeners
// to elements in the Document Object Model (DOM) to handle user interactions like clicks, key presses, mouse movements, or more complex behaviors like loading of resources or form submissions.

// To add an event listener, you typically use the addEventListener method on a DOM element. This method takes at least two arguments: the name of the event to listen for, and the function to execute
// when the event is fired. An optional third argument can specify options such as capturing and bubbling phases, or whether the event listener should be executed only once.

// Event propagation in JavaScript is a mechanism that defines how events propagate or travel through the DOM tree when an event occurs. This mechanism consists of three phases: capturing, target, and bubbling.

// Capturing Phase: This is the first phase in the event propagation process. During the capturing phase, the event starts from the window object and goes down to the target element through the DOM, triggering any event listeners that are set to activate during this phase. This is also known as the "trickle down" phase.
// Target Phase: In this phase, the event reaches the target element that is the actual element where the event occurred. Event listeners attached to the target element are triggered. If the event listeners are not specified to only trigger during the capture or bubble phases, they will execute in this phase.
// Bubbling Phase: After reaching the target, the event then bubbles up from the target element back up to the window object through the DOM. During this phase, it triggers any event listeners on its path that are set to activate during the bubbling phase. This is the default phase for most events and event listeners.

// Event delegation is a useful technique in JavaScript for handling events efficiently, especially when dealing with multiple similar elements or dynamically added elements. It leverages the event propagation mechanism to handle events at a higher level in the DOM rather than attaching event listeners to individual child elements. 
// This approach offers several advantages, including reduced memory usage, less code, and improved dynamic element handling.

// Event delegation works by taking advantage of the fact that events bubble up through the DOM. Instead of attaching an event listener to each individual element, you attach a single event listener to a parent element. This listener analyzes bubbled events to find out if they originated from an element of interest.

//  For instance, if you have a list with many list items, you can set up the event listener on the parent <ul> or <ol> tag, rather than on each <li> tag. The parent's event listener can then determine which <li> tag was clicked based on the event's target property.

// 1xx: informational, request recieved / processing
// 2xx: Success
// 3xx: Redirect, further actions must be taken
// 4xx: Client error
// 5xx: Server Error