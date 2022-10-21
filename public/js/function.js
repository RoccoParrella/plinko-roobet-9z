const pcElement = document.getElementsByClassName('pc')
const divPremios = document.getElementById('premios-entregados')

const positionBalls = (x, y) => {
    if (Math.round(y) >= 529) {
        if (x >= 281 && x <= 360) {
            updatePremios('sticker')
        } else if ((x >= 67 && x <= 77) || (x >= 565 && x <= 575)) {
            updatePremios('pad')
        } else if ((x >= 174 && x <= 181) || (x >= 458 && x <= 467)) {
            updatePremios('remera')
        } else if ((x >= 103 && x <= 112) || (x >= 529 && x <= 537)) {
            updatePremios('buzo')
        } else if ((x >= 210 && x <= 252) || (x >= 387 && x <= 430)) {
            updatePremios('llavero')
        } else if ((x >= 138 && x <= 146) || (x >= 494 && x <= 501)) {
            updatePremios('balance')
        } else {
            updatePremios('pc')
        }
    }
}

const premios = JSON.parse(localStorage.getItem('premios'))
const a = (JSON.parse(localStorage.getItem('premiosFijos')))

const updatePremios = (arg) => {
    winners(arg)
    clearInterval(interval)
    switch (arg) {
        case 'sticker':
            premios.sticker--
            break;
        case "llavero":
            premios.llavero--
            break;
        case "pad":
            premios.mousepad--
            break;
        case "remera":
            premios.remera--
            break;
        case "pc":
            premios.pc--
            break;
        case "balance":
            premios.balance--
            break;
        case "buzo":
            premios.buzo--
            break;
        default:
            break;
    }
    localStorage.setItem('premios', JSON.stringify(premios))
    location.reload();
}

const winners = (arg) => {
    let arr = JSON.parse(localStorage.getItem('winner'))
    arr.shift()
    if (arg == "pc" && premios.pc !== 1) {
        arr.push("+1 tiro".toUpperCase())
        localStorage.setItem("winner", JSON.stringify(arr))
        return
    }
    arr.push(arg.toUpperCase())
    localStorage.setItem("winner", JSON.stringify(arr))
}

if (premios.pc !== 1) {
    pcElement[0].innerHTML = ''
    pcElement[1].innerHTML = ''
    pcElement[1].setAttribute('class', "nada")
    pcElement[0].setAttribute('class', "nada")
}

let premiosFijos
if (a == 1) {
    premiosFijos = {
        buzo: 33,
        mousepad: 33,
        pc: 1,
        balance: 33,
        sticker: 1100,
        llavero: 600,
        remera: 66
    }
} else {
    premiosFijos = {
        buzo: 34,
        mousepad: 34,
        pc: 1,
        balance: 34,
        sticker: 1100,
        llavero: 600,
        remera: 66
    }
}

console.log(premiosFijos)

for (const key in premios) {
    let parrafoPremios = document.createElement('p')
    if (Object.hasOwnProperty.call(premios, key)) {
        const element = premios[key];
        const suma = premiosFijos[key] - element
        const final = `${suma}`
        parrafoPremios.innerHTML = final
        parrafoPremios.setAttribute('id', key)
        divPremios.appendChild(parrafoPremios)
    }
}