let buttons = document.getElementsByTagName('button')
let buttonDiv = document.getElementById('buttonDiv')
// document.onload(setStyle())

// function setStyle(){
    // buttons.forEach(element => {
    //     element.style.height = window.innerHeight/ 2
    // });
    buttonDiv.style.height = screen.height - 150 + "px"
    // console.log(buttonDiv)
    console.log(screen.height, buttonDiv.style.height, window.innerHeight)
// }