
// Сначала вызывается Symbol.toPrimitive, в случае если его нету, то
// ищутся методы valueOf(), toString()

const obj = {
    name: "Petia",
    id: 4320,
    sayHello() {
        return this.name;
    },
    [Symbol.toPrimitive](hint) {
        if (hint === 'string') {
            return `This object name is ${this.name}`
        } else {
            return this.id; 
        }
    }
}

const obj2 = {
    name: "Ivan",
    id: 934892,
    valueOf() {
        return this.id;
    },
    toString() {
        return `The name of this object is ${this.name}`
    }
}

console.log(String(obj))
console.log(Number(obj))

console.log(String(obj2))
console.log(Number(obj2))

// В случае если не будет предпринята попытка преобразовать объект к строке без соответствующего метода
// то выведется [object Object], для number будет NaN

// Если valueOf or toString return object -> this value will be ignored