// const stu1 ={
//     name : "kunal kumar",
//     age : 20,
//     marks :90
// }

// const stu2 ={
//     name : "kunali kumar",
//     age : 18,
//     marks :85
// }


// function personMeaker (name,age ) {
//     const person = {
//         name :name,
//         age : age,
    
//         talk () {
//             console.log(`that person was first ${this.name}`)
//         }
//     }
//     return person;
// }



//class

// class Person {
//     constructor (name,age) {
//         this.name = name;
//         this.age = age;
//     }
//    talk() {
//     console.log (`Hi , my name is ${this.name}`);
//    }
// }

// let p3 = new Person ("salu" , 40);



//inheratance 

class Person {
    constructor (name,age) {
        this.name = name;
        this.age = age;
    }
   talk() {
    console.log (`Hi , my name is ${this.name}`);
   }
};

class Student extends Person {
    constructor (name,age,marks) {

        super(name,age);
        this.marks=marks;
    }
    greet() {
        return "hello";

    }
}
class Teacher extends Person {
    constructor (name,age,subject) {

        super(name,age);
        this.subject=subject;
    }
    greet() {
        return "hello";
        
    }
}
