function startStop() {
    fetch('http://192.168.1.111:8080/api/v1/startstop').then((response) => {
        console.log(response)
    })
}

function next(){
    fetch('http://192.168.1.111:8080/api/v1/forwards').then((response) => {
        console.log(response)
    })
}

function previous(){
    fetch('http://192.168.1.111:8080/api/v1/backwards').then((response) => {
        console.log(response)
    })
}

function reset(){
    fetch('http://192.168.1.111:8080/api/v1/reset').then((response) => {
        console.log(response)
    })
}