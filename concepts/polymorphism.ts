/*
    Objects can take on more than one form depending on the context.
    It help us in cutting down the need to duplicate code
*/

// class Person
class Person {
  public name: string;
  public role: string;

  getName(): string {
    return this.name;
  }

  public getInfo() {
    return `User name: ${this.name} Role: ${this.role}`;
  }
}

class basketballPlayer extends Person {
  public name: string;
  super(name: string) {
    this.role = "BasketBall Player";
    this.name = name;
  }
}

class golfPlayer extends Person {
  super(name: string) {
    this.role = "Golf Player";
    this.name = name;
  }
}

const person1 = new basketballPlayer();
const person2 = new golfPlayer();

person2.getName();
