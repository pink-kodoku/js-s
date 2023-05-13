
// все аргументы функции находятся в псевдомассиве arguments
function callMyName(first_name, last_name, ...rest) {
    // получим первый аргумент
    console.log(arguments[0])
    // получим второй аргумент
    console.log(arguments[1])

    console.log(arguments)
}

callMyName("Ivan", "Ivanov") // Ivan Ivanov

// оператор расширения делает противоположное - он берет массив и делает из него обычные аргументы

const numbers = [1, 5, 2, 10, 4, 55]

console.log(Math.max(...numbers)) // 55

const word = 'simple'

console.log(...word)