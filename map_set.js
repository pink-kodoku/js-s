let map = new Map();

map.set("user1", { name: "Petia" })
map.set("user2", { name: "John" })

console.log(map.get("user2"))


for (let key of map.keys()) {
  console.log(key)
}

for (let value of map.values()) {
  console.log(value)
}

for (let [key, value] of map.entries()) {
  console.log(key, value)
}

let mapFromArray = new Map([
  ['user1', 'hello world'],
  [true, 'my name is petia'],
  [{ someKey: 'dediejd' }, 'how is it going'],
])

console.log(mapFromArray.entries())

let mapFromObject = new Map(Object.entries({ name: 'Petia', value: 5, count: 0 }))

console.log(mapFromObject)

// create object from [[key, value], [key, value], [key, value]...]

let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 3],
  [{}, 15], // [object Object]: 15
])

console.log(prices)

// to get object from map

const objFromMap = Object.fromEntries(new Map([
  [1, 5],
  [2, 'dejidije'],
]))

console.log(objFromMap)


// set

let set = new Set();

const setObj = {}
set.add('hello')
set.add(setObj)
set.add(setObj)

console.log(set)

// create set from array

let set2 = new Set(['string', 'something else', { name: 'petia' }, 4, 5])
console.log(set2)

console.log(set2.entries())