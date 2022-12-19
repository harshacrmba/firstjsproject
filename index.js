let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
}

let zeroEl = document.getElementById("zero-btn")
console.log(zeroEl)

function zero() {
    count = 0
    zeroEl.textContent = count
    countEl.textContent = count
}
