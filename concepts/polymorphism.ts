/*
    Objects can take on more than one form depending on the context.
    It help us in cutting down the need to duplicate code
*/

class Student {
  private id: string = "";
  private fname: string = "";
  private lname: string = "";

  takeCourse(courseId: number) {
    // take course
  }

  greeting() {
    return "HI, I am a Student";
  }
}

class MSCStudent extends Student {
  private instructor: string = "";

  getThesisFunding() {
    // ...
  }

  override greeting() {
    return "HI, I am a MSCStudent";
  }
}

/*
  somehow we are using inheritance benefits in polymorphism
*/

// in this context ali is a MSCStudent
let aliMSCStudent: MSCStudent = new MSCStudent();

// in this context ali is a Student
let aliStudent: Student = aliMSCStudent;

class Restaurant {
  serve(student: Student) {
    //...
  }
}

const restaurant1 = new Restaurant();

// aliMSCStudent is instance of MSCStudent but he also a Student
restaurant1.serve(aliMSCStudent);

const s1: Student = new MSCStudent();
const s2: Student = new Student();

s1.greeting(); // HI, I am a MSCStudent
s2.greeting(); // HI, I am a Student
