const port = `8080`
const baseURL = `http://192.168.0.67:${port}`
let responseText = document.getElementById('responseText')

function startStop() {
    fetch(`${baseURL}/api/v1/startstop`).then(v => v.json()).then((response) => {
        responseText.innerHTML = response.body
        console.log(response)
    })
}

function next(){
    fetch(`${baseURL}/api/v1/forwards`).then((response) => {
        console.log(response)
    })
}

function previous(){
    fetch(`${baseURL}/api/v1/backwards`).then((response) => {
        console.log(response)
    })
}

function reset(){
    fetch(`${baseURL}/api/v1/reset`).then((response) => {
        console.log(response)
    })
}