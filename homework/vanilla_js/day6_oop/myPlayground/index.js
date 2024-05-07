class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  changeAge(age) {
    this.age = age
  }
}

const newPerson = new Person('Alex', '24')
newPerson.changeAge('30')
console.log(newPerson)