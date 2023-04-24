let range = {
  from: 1,
  to: 5,
  // Мы должны вернуть объект с методом next()
  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,

      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ }
        } else {
          return { done: true }
        }
      }
    }
  }
}

for (let elem of range) {
  console.log(elem) // 1 2 3 4 5
}


for (let elem in range) {
  console.log(elem) // from to
}

// Мы можем получить больше контроля над итератором если будем вызывать его явно

let someMessage = "Hello world"

let iterator = someMessage[Symbol.iterator]();

while (true) {
  let next = iterator.next();
  if (next.done) break;
  console.log(next.value) // Выведет посимвольно строку "Hello world"
}