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

