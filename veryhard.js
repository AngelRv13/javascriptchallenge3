//VERYHARD
  //VERY HARD: Object prototype chain and prototypal inheritance exercise.
  
  class Person {
    name;
    job;
    age;
    constructor(name, job, age) {
      this.name = name;
      this.job = job;
      this.age = age;
    }
    exercise() {
      console.log(` ${this.name} Is running for fun !`);
    }
    fetchJob() {
      console.log(`${this.name} is a ${this.job}`);
    }
  }
  const worker = new Person("angel", "software engenieer", 20);
  worker.fetchJob();
  
  class Programmer extends Person {
    constructor(name, job, age, languages) {
      super(name, job, age);
      this.languages = languages;
      this.busy = true;
    }
    completeTask() {
      this.busy = false;
    }
    acceptNewTask() {
      this.busy = true;
    }
    offerNewTask() {
      if (this.busy === true) {
        console.log(`${this.name} is to busy`);
      } else {
        console.log(`${this.name} is ready to work `);
      }
    }
    learnLanguage(x) {
      this.languages.push(x);
    }
    listLanguages() {
      console.log(this.languages);
    }
    allInfo() {
      console.log(
        `${this.name} is a ${this.job} and he is ${this.age} and he has experience with ${this.languages}`
      );
    }
  }
  
  const coWorker = new Programmer("ivan", "software engenieer", 23, [
    "react",
    "script",
    "javascript",
  ]);
  coWorker.allInfo();
  
  const coWorker2 = new Programmer("osiel", "software engenieer teacher", 22, [
    "react",
    "css",
    "javascript",
  ]);
  coWorker2.allInfo();
  
