const arr = [1, 2, 3, 4, 5]
const names = ["Petia", "Ivan", "Mary"]

// splice, mutate the array

arr.splice(1, 1)

console.log(arr) // 1 3 4 5

// remove elements from 0 to 2 indices and insert two new elements 
names.splice(0, 2, "New name one", "New name two")

console.log(names) // Mary, New name one, New name two

// splice remove an array of deleted items

const result = arr.splice(0, 1)

console.log(result) // [1]

// only insert new elements without deleting

arr.splice(0, 0, 1, 2, 3, 4, 5)

console.log(arr) // [1, 2, 3, 4, 5, 3, 4, 5]

// we can also use negative indices

arr.splice(-3, 5)

console.log(arr) // [1, 2, 3, 4, 5]

/////////////////////////////////////////////////////////////////////////

// возвращает новый массив в который копирует элементы начинаю с индекса start и до индекса end
// индекс end является исключительным

const arr2 = [1, 2, 3, 4, 5, 6, 7]

console.log(arr2.slice(0, 3)) // [1, 2, 3]

console.log(arr2.slice(-1))

// creates copy of an array

console.log(arr2.slice())

/////////////////////////////////////////////////////////////////////////

const arr3 = [1, 2, 3, 4, 5]

console.log(arr3.concat([1, 2, 3], 5, 6)) // [1, 2, 3, 4, 5, 1, 2, 3, 5, 6]
console.log(arr3) // [1, 2, 3, 4, 5]

const user = {
    name: "Ivan",
    surname: "Ivanov"
}

console.log(arr3.concat(user, [1, 2, 3], {name: "Petia"})) // объекты также добавляются в массив

/////////////////////////////////////////////////////////////////////////

// forEach позволяет интерировать объект, при этом она ничего не должна возвращать, если мы внутри ее тела попытаемся что-то вернуть, то это отбросится и будет проигнорировано

const names2 = ["Petia", "Mary", "Alex", "James"]

const result2 = names2.forEach((name, index, array) => {
    // Здесь мы можем что-то делать с элементами массива
    console.log(`element ${name} at index ${index} inside [${array}]`)
    return 5; // it will be ignore
})

console.log(result2) // undefined

/////////////////////////////////////////////////////////////////////////

const arr4 = [1, 2, 3, 4, 5]

// indexOf(item, from) возвращает индекс, на котором был найден определенный элемент, в противном случае возвращает -1
console.log(arr4.indexOf(4)) // 3
console.log(arr4.indexOf(100)) // -1
console.log(arr4.indexOf(3, 2)) // 2

// includes(item, from) возращает true если нашел элемент в массиве, в противном случае возвращает false
console.log(arr4.includes(4)) // true
console.log(arr4.includes(100)) // false
console.log(arr4.includes(3, 2)) // true

// По умолчанию оба эти методы используют строгое сравнение (===)

// lastIndexOf делает тоже саоме что и indexOf, но справа налево

console.log(arr4.lastIndexOf(1)) // 0


/////////////////////////////////////////////////////////////////////////

// В случае, если у нас есть массив объектов, то нам нужно найти определенный объект лишь по каким-либо свойствам или полям
// для этого мы можем использовать функцию, которая будет проверять, является ли объект тем, что мы ищем
// функция вызывается по очереди для каждого элемента

const users = [
    {name: "Petia", age: 5},
    {name: "Ivan", age: 15},
    {name: "David", age: 55},
]

const user1 = users.find((user, index, array) => {
    // если true - возвращается текущий элемент и перебор прекращается
    // в случае, если все варианты оказались ложными - возвращает undefined
    if (user.name === "Petia" && user.age === 5) {
        return true;
    }
    return false;
})

console.log(user1)

// findIndex - возвращает индекс элемента, иначе -1

const userIndex = users.findIndex(u => u.name === "Petia")

console.log(userIndex) // 0

// findLastIndex - делает тоже самое что и findIndex, но справа налево

const userIndex2 = users.findLastIndex(u => u.name === "David")

console.log(userIndex2) // 2


/////////////////////////////////////////////////////////////////////////

// В случае, если найденных элементов может быть много, мы используем arr.filter()

const users2 = [
    {name: "Petia", age: 5},
    {name: "Ivan", age: 15},
    {name: "David", age: 15},
    {name: "Jon", age: 15},
    {name: "Bob", age: 11},
]

// В случае, если ничего не будет найдено, вернется пустой массив
const filteredUsers = users2.filter((user, index, array) => {
    if (user.age === 15) {
        return true;
    }
    return false;
})

console.log(filteredUsers)


/////////////////////////////////////////////////////////////////////////

// Для того чтобы преобразовать массив, мы можем использовать определенные методы
// map - вызывает функцию для каждого элемента, которая можем преобразовывать данный элемент

// добавим каждому пользователю id

let id = 0;
const userResults = users2.map((user, index, array) => {
    // Возвращаем новое значение, вместо элемента
    user.id = id++;
    return user;
})

// преобразуем name у каждого объекта в его длину и вернем массив длин

const lengths = users2.map(u => u.name.length)

console.log(userResults)

console.log(lengths)


/////////////////////////////////////////////////////////////////////////

// arr.sort(fn) - меняет элементы в массиве местами, в зависимости от переданной функции
// По умолчанию элементы сортируются как строки

const numbers = [4, 1, 10, 3, 1, 4, 55, 0.5]

numbers.sort()

console.log(numbers) // отсортирует массив

const numbers2 = [4, 1, 10, 3, 1, 4, 55, 0.5]

// Для реализации собственной фильтрации, мы можем написать функцию,
// эта функция принимает два аргумента a и b, в случае если а меньше b, мы должны вернуть 1, 
// если они равны 0, если а больше b, то вернуть -1
function compare(a, b) {
    if (a < b) {
        return 1;
    }
    if (a==b) {
        return 0;
    }
    return -1;
}

// упрощенный вариант функции compare

function compare2(a, b) {
    return a - b;
}

console.log(numbers2.sort(compare2))




