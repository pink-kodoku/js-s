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