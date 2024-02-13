var button = document.createElement("button")
var buttonDelete = document.createElement("button")
var container = document.createElement("div")
var input = document.createElement("input")
var send = document.createElement("button")

button.className = "button"
container.className = "container"



button.innerHTML = "Click me"
buttonDelete.innerHTML = "Delete me"
send.innerHTML = "Send"




document.body.appendChild(button)
document.body.appendChild(buttonDelete)
document.body.appendChild(container)
document.body.appendChild(input)
document.body.appendChild(send)




const buttons = document.querySelectorAll('.button')

// button.onclick = function() {
//     document.body.appendChild(img)
// }

// button.addEventListener('click', function() {
//     container.appendChild(img1)
//     container.appendChild(img2)

// })

// buttonDelete.addEventListener('click', function() {
//     container.removeChild(img1)
//     container.removeChild(img2)
// })





// for (let i = 0; i < arr.length; i++) {
//     buttons[i].addEventListener('click', function() {
//         container.appendChild(arr[i]);
//     });
// }

let num = 0;
function addImg(){
    const img = new Image();
    container.appendChild(img);
    img.src = `img/${num}.png`;
    img.className = `img${num}`;
}

button.addEventListener('click', function() {
    num = num + 1
    addImg()
})


buttonDelete.addEventListener('click', function() {
    container.removeChild(container.lastElementChild)
    
})


let secretWord = 'якубович';


send.addEventListener('click', function() {
    checkLetter(input.value);

})

function checkLetter(letter) {
    if (secretWord.includes(letter)) {
        alert('Буква есть');
    } else {
        num = num + 1
        addImg();
    }
}
