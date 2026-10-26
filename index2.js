let winUser = 0 
let winComputer = 0
let max = 5;
let round = 1 
let lives = 10

while(lives > 0) {
    const b =  Math.floor( Math.random() * max) + 1;
    let a = prompt(`угадай число от 1 до ${max} за одну  попытку`);

    if (a === "изменить") {
        let userChange = +prompt ("Введите до скольки загадывать");

        while (Number.isNaN(userChange) || userChange < 1) {
          userChange = +prompt ("Введите число до скольки загадывать: ");
        }
        max = userChange
        continue
    }

     a = Number(a)
    if (Number.isNaN(a) || a < 1 || a > 5) {
        alert ("Не корректное число")
        continue
    }

    if (b === a) {
        winUser += 1
        alert (`Победа! Счет: ${winUser}: ${winComputer}`)
    }
    else {
        winComputer += 1
        alert (`Поражение! Было загадано: ${b}. Счет: ${winUser}: ${winComputer}. осталось жизней: ${lives}. Раунд: ${round}`)
        lives--
    }

    round += 1  
    }

    alert (`игра окончена. Итоговый счет: ${winUser}:${winComputer}. Сыграно раундов: ${round-1}`)
