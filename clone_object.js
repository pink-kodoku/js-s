const obj = {
    n1: 1,
    n2: 2,
    n3: 3
}

console.log("initial object", obj)

const newObj1 = {}

for (let key in obj) {
    newObj1[key] = obj[key]
}

console.log("first copy", newObj1)

const newObj2 = {}

Object.assign(newObj2, obj)

console.log("second copy", newObj2)

// using structured clone (support only for new version of browsers)

const newObj3 = structuredClone(obj)

console.log("third copy", newObj3)