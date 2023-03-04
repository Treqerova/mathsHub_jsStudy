// let v = "seven"
// const c = 8

//---------------------
// STRING
const str1 = 'I\'m OK!'
const str2 = 'I\'m say - ${str1}' //можно использовать перенос Enter
const str3 = "I'm say - ${str1}" //можно использовать перенос \n

//console.log (str, typeof str) // вывод сообщения в консоль
console.log (str1)
console.log (str2)
console.log (str3)

//---------------------
// NUMBER 
// (от -(2**53 - 1) до (2**53 - 1))
const num1 = 75
const num2 = 75**3 //** - степень
/*
const num3 = 80 - '5' // = 75 
const num4 = 80 + "5" // = 805
const num5 = 7 + 8 + "5" // = 155
const num6 = 15 * "a" // = NaN (not a number)
const num7 = 17 / 0 // = Infinity (бесконечность)
*/

alert(num1) //сообщение - всплывающее окно в браузере


//---------------------
// BIGINT
const bigunt = 1031001010101n

//---------------------
// BOOLEAN
// true/false
// < > >= <= == === <>
const bool1 = "a" > "AAA" // true - сравнивается номер в кодировке (в текущем случае UTF-8)

//---------------------
// NULL
// пусто, тип Object
let empty = null
console.log (empty, typeof empty)

//---------------------
// UNDEFINED
let box = undefined
console.log (undefined, typeof undefined)

//---------------------
// SYMBOL 
// что-то уникальное, имена объекта
const uniq1 = Symbol('id')
const uniq2 = Symbol('id')
console.log(uniq1 = uniq2) // false

//---------------------
// OBJECT 
// набор пар "ключ - значение"
const obj = {
    name: "Sasha",
    age: 19,
    isHapppy: true
}
console.log(obj.name)

obj.job = 'Google' // назначили новое свойство

const array = ["Anna, 18, false"] // Массив
array[3] = 'Amazon'
console.log(array[0]) // выведет Anna

// --- ОПЕРАТОРЫ ---

const variant = "option1"

console.log(5 == "5") // при сравнении == числа и строки идет перевод в строку / bool (сравниваниет значение)
console.log(5 === "5") // при сравнении === сравнение по типу и значению
console.log(0 == null) // (0 <= / >= null) = true

typeof +"abc" - перевод строки в число
15 + "" = '15'
+"abc" = NaN
Boolean(0) = false // в остальных случаях true 
!true = false // ! - оператор отрицания
!!"text" = true // при помощи двойного отрицания


// --- УСЛОВИЕ IF ---
const go = confirm("Будем ли мы бегать?")
if (go) {
    alert("побежали")
} else {
    alert("стоим")
}

const go2 = prompt("куда мы побежим?", "домой")
if (go2) {
    alert("побежали")
} else {
    alert("стоим")
}

const userName = prompt("Who you are", "anonim")
// userName = null при нажатии на Отмена
if (userName === "admin") {
    alert("Hello boss!")
} else if (userName === "anonim" || !userName) {
    alert("I don't know you...")
} 
/*else if (userName === null) // можно сократить на (!userName)
{
    alert("You doesn't exist")
} */
else {
    alert(`Hi ${userName}!`)
}

// --- УСЛОВИЕ WHILE ---

const counts = prompt("До скольки вы хотите досчитать?", 20)
let i = 0
while (i <= counts) {
    console.log(i)
    // i = i + 1
    // i += 1
    i++
}

const counts = prompt("До скольки вы хотите досчитать?", 20)
let i = 0
do {
    console.log(i++)
} while (i <= counts)

// --- УСЛОВИЕ FOR ---

создать массив от 1 до 50
for (let i = 1; i <= 50; ++i) {
    console.log(i)
} 

let arr = [4, 5, 6]
arr.push(7)
console.log(arr)

const arr = []
for (let i = 1; i <= 50; ++i) {
    arr.push(i)
}
console.log(arr)

const newArr =[]
for (elem of arr) {
    const marker = elem % 3
    if (!marker) {
        newArr.push(elem)
    } 
}
console.log(newArr)

const obj = {
    name: "Anna",
    age: "28", 
    city: "StPetersburg"
}
for (key in obj) {
    console.log(key, obj[key])
}

// задания из теста 3
let count = 15
let point = 5 
while (count < 18) {
point = point + 3
count++
}
console.log(point)

// задания из теста 3
let num = 17
let str = "17"
let empty = null
if ( str - num ) {
    console.log('first')
} else if (empty - num) {
    console.log("second")
} else if (str - empty) {
    console.log("third")
} else {
    console.log("no one")
}


// functions - функции
// declaration 
// может быть вызвана после объявления функции (можног писать в любом месте кода)

function scream(a, b) {
    // const result = a * b
    // return result
    //alert("AAAAAAAA")
    return a*b
}
//console.log(scream())
console.log(scream(3, 5))

//expression
const wowScream = function() {
    alert("WOOOOW")
} 

//arrow
const arrow = () => {
    alert("arrow in the sky")
}
//wowScream()