// const obj1 = {
//     name: "Petia",
//     age: 5,
// }

// const obj2 = {
//     name: "Ivan",
//     age: 55,
// }

// function sayHello() {
//     console.log(this.name + " Hello!")
// }

// obj1.sayHello = sayHello
// obj2.sayHello = sayHello

// obj1.sayHello()
// obj2.sayHello()

// Log Petia Hello!
// Log Ivan Hello!

// const obj3 = {
//     name: "Petia",
//     sayHello() {
//         this.name = "Ivan"
//         console.log(this.name)
//     }
// }

// obj3.sayHello() // Ivan
// const obj4 = {
//     name: "Petia",
//     sayHello: () => console.log(this.name)
// }

// obj4.sayHello() // undefined


// function getUser() {
//     return {
//         name: "Petia",
//         ref: this
//     }
// }

// const user = getUser();
// console.log(user.ref.name) // undefined

// создадим замыкание с помощью функции
// function getUser2() {
//     return {
//         name: "Petia",
//         getRef() {
//             return this;
//         }
//     }
// }

// const user2 = getUser2()
// console.log(user2.getRef().name)

// замыкание не получится создать со стрелочной функцией
// function getUser3() {
//     return {
//         name: "Petia",
//         getRef: () => this
//     }
// }

// const user3 = getUser3();
// console.log(user3.getRef().name) // undefined