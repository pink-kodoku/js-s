

let john = { name: 'John' }

let arr = [john]

john = null;

console.log(arr[0])

// WeakMap - позволяет сборщику мусора удалять объекты из памяти

let weakMap = new WeakMap();

let john2 = { name: 'John' }

weakMap.set(john2, 'value')

john2 = null;

console.log(weakMap.get(john2))


// Ключи в WeakMap должны быть только объектами

let weakMap2 = new WeakMap();
const user = { name: 'petia' };

weakMap2.set(user, 'some value')

console.log(weakMap2.get(user))

// В WeakMap отсутствуют методы для перебора значений

// WeakSet - структура данных, в которую мы можем добавлять только объекты