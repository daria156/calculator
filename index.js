//const a = +prompt ('введите первое число') // -1000 1000
//const b = prompt ('введите знак')  // + -
//const с = prompt ('введите второе число') //-1000 1000

let a 
let b 
let c 

while (true) {
    const userPrompt = +prompt ('Введите первое число')
    if (Number.isNaN(userPrompt)
    || userPrompt < -1000
    || userPrompt > 1000) {
        console.log ("некорректный ввод")
    } 
    else {
        a = userPrompt
        break
    }
}

while (true) {
    b = prompt ('введите знак')
    if (b === '+'
    || b === '-') {
       break
    }
    else {
        b = SinglPrompt
        console.log ("некорректный ввод")
    }
}

while (true) {
    const userPrompt = +prompt ('Введите второе число')
    if (Number.isNaN(userPrompt)
    || userPrompt < -1000
    || userPrompt > 1000) {
        console.log ("некорректный ввод")
    } 
    else {
        c = userPrompt
        break
    }
}
let result; 

if (b === '+') {
    result = a + c;
}
else if (b === '-') {
    result = a - c;
}

console.log ("Результат: " + result);