let john = { name: "John" };

let arr = [john]; // объект john все еще хранится в массиве, так как является достижимым

john = null;

console.log(arr[0]); // john object

// WeakMap - позволяет сборщику мусора удалять объекты из памяти

let weakMap = new WeakMap();

let john2 = { name: "John" };

weakMap.set(john2, "value");

john2 = null;

console.log(weakMap.get(john2)); // undefined, так как объект уже удален сборщиком мусора

// Ключи в WeakMap должны быть только объектами

let weakMap2 = new WeakMap();

const user = { name: "petia" };

weakMap2.set(user, "some value");

console.log(weakMap2.get(user));

// В WeakMap отсутствуют методы для перебора значений

// WeakMap удобно использовать для кеширования, например

const cache = new WeakMap();

const proccess = (obj, fn) => {
    if (!cache.has(obj)) {
        cache.set(obj, fn(obj))
    }
    return cache.get(obj)
}

// WeakSet - структура данных, в которую мы можем добавлять только объекты

let weakSet = new WeakSet();

// Можем использовать в качестве дополнительных данных
