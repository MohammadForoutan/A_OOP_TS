/*
    This property of OOP forces a more thorough data analysis, reduces development time and
    ensures a higher level of accuracy.
    inherited all the public attributes 
*/

class Person {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public greeting() {
    return this.name + " " + this.age;
  }
}

class Student extends Person {}

const bob = new Student("Bob", 12);
bob.greeting();
