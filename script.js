

// // --- ИГРА ---
// нажав на кнопку начать игра запускается 
// генерируется задача
// пользователь может ввести ответ
// кнопка "старт" должна стать "праверить"

// сравниваем ввод пользователя с ответом
// вывести результат проверки и правильный ответ
// кнопка "проверить" должна стать "старт"



// функция генерации рандомного числа в диапазоне [min, max]
const getRandomNumInRange = (min, max) => {
    const randomNum = (Math.random() * (max - min) + min).toFixed(0)
    return randomNum
}

// функция генерации примера 
const getTask = () => {
    // получение случайных чисел
    // const randomNum1 = getRandomNumInRange(0,100)
    // const randomNum2 = getRandomNumInRange(0,100)

    // получение символа для примера
    // let symbol 
    // if (Math.random() > 0.5) {
    //     symbol = "+"
    // } else {
    //     symbol = "-"
    // }

    const symbol = (Math.random() > 0.5) ? "+" : "-"
    // если выполняется условие, то первое значение, если нет - второе

    // генерация примера

    // if (isPlus) {
    //     gameElements[1].innerText = `${randomValue1} + ${randomValue2}`
    // } else {
    //     gameElements[1].innerText = `${randomValue1} - ${randomValue2}`
    // }

    //const task = `${randomNum1} ${symbol} ${randomNum2}`
    const task = `${getRandomNumInRange(0,100)} ${symbol} ${getRandomNumInRange(0,100)}`
    gameState.rightAnswer = eval(task)
    return task
}

// функция изменения состояния
const toggleGameState = () => {
    gameState.taskInProcess = !gameState.taskInProcess
}

const gameElements = document.getElementById("my_game").children

// называем все элементы div
const title = gameElements[0]
const userTask = gameElements[1]
const userAnswer = gameElements[2]
const btnGame = gameElements[3]

const gameState = {
    taskInProcess: false,
    rightAnswer: null,
}


const startGameFunc = () => {
    if (!gameState.taskInProcess) {
        title.innerText = "Укажите ответ"
        userAnswer.value = null
        // генерируем задачу и ответ
        //const task = getTask()
        
        // показываю задачу пользователю
        userTask.innerText = getTask() + " = "
        userAnswer.hidden = false

        // меняю кнопку
        btnGame.innerText = "Проверить ответ"
        // меняю состояние
        toggleGameState()
    } else  {
        // сравнить ответ пользователя с правильным
        const isRight = gameState.rightAnswer == userAnswer.value
        // вывести результат
        userTask.innerText = userTask.innerText + " " + gameState.rightAnswer 
        // вывести поздравление
        title.innerText = (isRight) ? "Вы выиграли :)" : "Вы проиграли :("
        // поменять кнопку 
        btnGame.innerText = "Сыграть еще раз"
        // поменять состояние
        toggleGameState()
    }
    //btnGame.innerText = (gameState.taskInProcess) ? "Проверить" : "Начать заново"
}
btnGame.addEventListener("click", startGameFunc)

userAnswer.addEventListener("keydown", (e) => {
    // console.log(e)
    if (e.key === "Enter") {
        startGameFunc()
    } else if (e.key === "Escape") {
        userAnswer.blur() // убрать фокус с элемента 
    }
})










// берем все дивы из класса choosed_block_container
const chooseEl = document.querySelectorAll(".choosed_block_container > div")
const counterEl = document.querySelector(".choosed_block span")

// const choosedState = {
//     countElements: 0, 
// } 

// const changeCount = (value) => {
//     choosedState.countElements += value 
//     counterEl.innerText = choosedState.countElements
// }

const choosedState = {
    countElements: 0, 
    setCountValue(value) {
        this.countElements += value 
        counterEl.innerText = this.countElements
    }
} 

const eventFunc = (e) => {
    // по клику выбрать элемент - выделить его при помощи класса
    // запустить счетчик

    if (e.target.className === "") {
        e.target.className = "choosed_element"
        //counterEl.innerText = +counterEl.innerText + 1
        //changeCount(1)
        choosedState.setCountValue(1)
    } else {
        e.target.className = ""
        //counterEl.innerText = counterEl.innerText - 1
        //changeCount(-1)
        choosedState.setCountValue(-1)
    }
}

// присвоить каждому элементу обработчик событий
for (let i = 0; i < chooseEl.length; i++) {
    //console.log(chooseEl[i])
    chooseEl[i].addEventListener("click", eventFunc)
}

// удалить обработчик события у элемента
// chooseEl[2].removeEventListener("click", eventFunc)

// const timeIsOverFunc =  () => {
//     alert("Время вышло!")
// }

// будильник 
// const alarm = setInterval(() => {
//     let wantToSleep = confirm ("Хотите ли вы спать?")
//     if (wantToSleep) {
//         console.log("tic")
//     } else {
//         clearInterval(alarm)
//     }
// }, 3000)







// пример асинхронности JS
// сначала выполняются линейные функции (например, console.log("3"))
// console.log("1")
// setTimeout(() => {
// console.log("2")
// }) 
// console.log("3")

// классический (самый популярный) вид написания функции
// const func = () => 5


const postBlock = document.querySelector(".posts_block-container")
const showPostBtn = document.querySelector(".posts_block button")

const func = () => 5


    // функция создания 1 поста
    function addPost(title, body) {
        const postItem = document.createElement("p")
        const postTitle = document.createElement("h3")
        const postBody = document.createElement("span")
        
        postTitle.innerText = title
        postBody.innerText = body

        postBlock.append(postItem)
        postItem.append(postTitle, postBody)
    }

function getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
        console.log(res)
        return res.json()
    })
    .then(data => {
        for (item of data) {
            addPost(item.title, item.body)
        }
        //addPost(data[7].title, data[7].body)
        console.log(data)
    })
    .catch(err => console.log(err.message))
   // catch ловит ошибки и принимает 
}

showPostBtn.onclick = getPosts

//     function createPost(title, body, userId) {
//         fetch("https://jsonplaceholder.typicode.com/posts", {
//             method: 'POST',
//             body: JSON.stringify({
//                 // title: title,
//                 // body: body,
//                 // userId: userId,
//                 // аналогично тому что ниже
//                 title,
//                 body,
//                 userId,
//             }), 
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8'
//             },
//         })
//     .then(res =>  {
//         console.log(res)
//     })
//     .catch(err => console.log(err.message))
//    // catch ловит ошибки и принимает 
//     }

//     createPost("title","body", 15)