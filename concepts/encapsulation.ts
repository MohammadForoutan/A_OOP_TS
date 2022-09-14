/*
    we have defined two object classes and created an instance of each.
    in encapsulation principle states the new instance of motor1 cannot access
    the attributes of person1. If you try you should get such a error.
*/

// person class object
class Person {
  name: string = "";
  age: number = 0;
}

// motor class object
class Motor {
  make: string = "";
  model: string = "";
  color: string = "";
}

// create a new instance of each
const person1 = new Person();
const motor1 = new Motor();

// error: Property 'age' does not exist on type 'Motor'
motor1.age;
