const divWinners = document.getElementById('winners')

const setLocalStorage = (a) => {
    let premios
    let b
    if (a == 1) {
        premios = {
            buzo: 33,
            mousepad: 33,
            pc: 1,
            balance: 33,
            sticker: 1100,
            llavero: 600,
            remera: 66
        }
        b = 1
    } else {
        premios = {
            buzo: 34,
            mousepad: 34,
            pc: 1,
            balance: 34,
            sticker: 1100,
            llavero: 600,
            remera: 66
        }
        b = 0
    }

    
    localStorage.setItem('premios', JSON.stringify(premios))
    localStorage.setItem('premiosFijos', JSON.stringify(b))
    localStorage.setItem('winner', JSON.stringify(["STICKER","STICKER","BUZO"]))
    window.location.href = "/index.html"
}

let arr = JSON.parse(localStorage.getItem('winner'))

for (let i = 2; i >= 0; i--) {
    let parrafo = document.createElement('p')
    parrafo.innerHTML = arr[i]
    if (i == 2 ) {
        parrafo.setAttribute("id", "color")
    }
    divWinners.appendChild(parrafo)
}