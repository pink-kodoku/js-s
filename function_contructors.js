// function User(name) {
//     this.name = name;
//     this.age = 18;
//     this.isAdmin = false;
// }

// const user = new User("Petia")
// console.log(user)

// // если мы хотим чтобы объект сразу же создался и присвоился

// let user2 = new function() {
//     this.name = "John";
//     this.age = 5;
// }

// console.log(user2)

// new.target === undefined ? функция вызвана без new : с new

function User() {
    this.name = "User";
    this.isAdmin = false;
    if (new.target === undefined) {
        console.log("Функция вызвана без new")
    } else {
        console.log("Функция вызвана с new")
    }
}

const user = new User()
const user2 = User()
console.log(user2) // undefined, т.к мы не запускаем алгоритм, который создает this и возвращает его