// Task 1: Code a Person class
class Person {
    constructor(name ="Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
   sleep() {
       this.energy += 10;
         console.log('Energy is increasing, currently at:', this.energy)
    }
    doSomethingFun() {
        this.energy -= 10;
          console.log('Energy is decreasing, currently at:', this.energy)
    }
}

// Task 2: Code a Worker class
class Worker extends Person {
    constructor(xp = 0, hourlyWage = 10, name, age, energy) {
        super(name, age, energy)
    }
    goToWork() {
        this.xp += 10;
        console.log('Experience points is increasing, currently at:', this.xp)
    }
}
// Task 3: Code an intern object, run methods
function intern() {
    newIntern = new Worker(0, 10, "Bob", 21, 110);
    newIntern.goToWork();
    return newIntern;
}
intern();
// Task 4: Code a manager object, methods
function manager() {
    newManager = new Worker(100, 30, "Alice", 30, 110);
    newManager.doSomethingFun();
    return newManager;
}
manager();