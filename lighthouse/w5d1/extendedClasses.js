class Person {
  // moved here b/c it was identical
  constructor(name, quirkyFact, age) {
    this.name = name;
    this.quirkyFact = quirkyFact;
    this.age = age;
  }
  // both have ages
  ages(){
  	return `and Im ${this.age} years-old`;
  }
  // moved here b/c it was identical
  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact} ... ${this.ages()}`;
  }

}

class Student extends Person {
  // stays in Student class since it's specific to students only
  enroll(cohort) {
    this.cohort = cohort;
  }
  bio(){
    return `I'm a student at Lighthouse Labs (aka Labber). ${super.bio()}`
  }
}

class Mentor extends Person {
  // Mentor bios need to include a bit more info
  bio() {
    return `I'm a mentor at Lighthouse Labs. ${super.bio()}`;
  }
  goOnShift() {
    this.onShift = true;
  }

  // specific to mentors
  goOffShift() {
    this.onShift = false;
  }
}
//Make the Student class's bio start with 
//"I'm a student at Lighthouse Labs (aka Labber). " 
//before continuing on with the rest of their bio sentence

// DRIVER CODE

const bob = new Mentor('Bob Ross', 'I like mountains way too much');
// console.log(bob.bio());


const student1 = new Student('Mateus', 'I am using an extended class', 22);
     // student1.enroll('march 12');
// const mentor1 = new Mentor('Mateus', 'I am using an extended class', 22);




console.log( student1.bio());





