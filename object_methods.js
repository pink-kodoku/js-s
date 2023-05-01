// Object.keys(obj) - возвращает массив ключей объекта
// Object.values(obj) - возвращает массив значений объекта
// Object.entries(obj) - возвращает массив пар [key, value]

const user = {
  name: "Petia",
  age: 5,
};

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

// Методы объекта выше игнорируют сильмволные ключи, поэтому они не будут выведены

const user2 = {
  name: "Petia",
  age: 15,
  [Symbol.toPrimitive](hint) {
    if (hint === "string") {
      return "Hello world";
    } else {
      return 5;
    }
  },
};

console.log(Object.keys(user2));

// Если мы хоти выводить также символьные ключи, то можем использовать метод
// Object.getOwnPropertySymbols(obj)

console.log(Object.getOwnPropertySymbols(user2)); // [ Symbol(Symbol.toPrimitive) ]

// Трансформация объекта

const prices = {
  banana: 5,
  apple: 1,
  meat: 15,
};

const doublePrices = Object.fromEntries(
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);

console.log(doublePrices);
