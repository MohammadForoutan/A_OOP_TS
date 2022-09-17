// person class object

/*
    Control visibility
    - Public [ accessible from instances and within Class - default all properties & methods are public in typescript(in compiled languages it's depands on compiler and interpreted language depands on interpreter) ]  
    - Private [ only accessible within its class ]
    - Protected [ only accessible within its Class and subclasses]
    - Static [ only accessible through Class without creating a new instance]
    - readonly [ prevents assignments to the field outside of the constructor ]
*/
// by default all attributes are always public

class Person {
  public name: string = "";
  public age: string = "";
  private email: string = "";
  private readonly password: string;
  static Count = 0;

  constructor(password: string, email: string) {
    this.password = password;
    this.email = email;
  }

  public getEmail() {
    return this.email;
  }
}

class Employee extends Person {
  super() {
    email;
  }
}

const person1 = new Person("101010", "sample@mail.com");

person1.age;
// error: Property 'email' is private and only accessible with class 'Person'
person1.email;
// We can implement methods to access private properties
const email = person1.getEmail();

Person.Count;
