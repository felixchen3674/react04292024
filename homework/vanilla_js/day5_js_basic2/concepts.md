# Interview Questions

## Array Traversal

- **How to traverse an array?**
  - _For loop / forEach / for … of …_
  for loop is the kind of loop traversal that gives us most control over everything.
  We usually would go through index, for ... of ... less control, handy when we don't
  want index specific traversal and can just deal with each item, forEach is not breakable,
  easier to read, less control.

## Array Methods

- **What does array.prototype.map method do**
  - _takes a callback / return a new array_
  it can takes a new array, perform call back on each item and create a new array.

## Destructuring

- **What is destructure**
unpack values from arrays or objects into distinct values.

## Object Copying Methods

- **What is shallow vs deep copy**
  - _explain each_
  in shallow copy, if there are nested items, references get copied, deep copy doesn't
  copy references.
- **Explain how to do both:**
  - _shallow: spread operator_ : let shallowCopy = {...obj}
  - _deep: 3rd party library: lodash_ : let deepCopy = obj.cloneDeep(obj);
  - use Json.stringfy() and then Json.parse()
