const port = `8080`
const baseURL = `http://192.168.0.67:${port}`
let responseText = document.getElementById('responseText')

function checkConnection() {
    fetch(`${baseURL}/api/v1/test`).then((response) => {
        connectionSymbol.style.backgroundColor = 'Lime'
        connectionText.innerHTML = "Succesfully Connected to API"
    }).catch((err) => {
        connectionSymbol.style.backgroundColor = 'Red'
        connectionText.innerHTML = "Could not Connect to API"
    })
}

checkConnection()

async function startStop(button) {
    fetch(`${baseURL}/api/v1/startstop`).then(v => v.json()).then((response) => {
        responseText.innerHTML = response
        console.log(response)
    })
    button.classList.toggle('activatedButton')
}

async function next(button) {
    fetch(`${baseURL}/api/v1/forwards`).then(v => v.json()).then((response) => {
        responseText.innerHTML = response
        console.log(response)
    })

    button.classList.toggle('activatedButton')
    await sleep(600);
    button.classList.toggle('activatedButton')
}

async function previous(button) {
    fetch(`${baseURL}/api/v1/backwards`).then(v => v.json()).then((response) => {
        responseText.innerHTML = response
        console.log(response)
    })

    button.classList.toggle('activatedButton')
    await sleep(600);
    button.classList.toggle('activatedButton')
}

async function reset(button) {
    fetch(`${baseURL}/api/v1/reset`).then(v => v.json()).then((response) => {
        responseText.innerHTML = response
        console.log(response)
    })

    button.classList.toggle('activatedButton')
    await sleep(600);
    button.classList.toggle('activatedButton')
}

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
