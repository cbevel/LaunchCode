// learning about classes//

class Astronaut {
    constructor (name, age, mass = 54) {
        this.name = name;
        this.age = age;
        this.mass = mass;
        this. reportStats = function (){
            let stats = `${this.name} is ${this.age} years old and has a mass of ${this.mass} kg.`
            return stats;
        }
    }

    // reportStats() {
    //     let stats = `${this.name} is ${this.age} years old and has a mass of ${this.mass} kg.`
    //     return stats;
    // }
}

let fox = new Astronaut ("fox", 7, 12);
console.log(fox.reportStats());

//this is a test. this is another test.
//another change has been made
//test # 2
