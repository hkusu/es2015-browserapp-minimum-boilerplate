class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  hello() {
    console.log(`Hello, ${this.name}.`)
  }
}

export default Person
