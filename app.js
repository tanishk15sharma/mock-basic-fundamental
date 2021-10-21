const counterText = document.querySelector("#counter")
const increaseBtn = document.querySelector("#increasebtn")
const decreaseBtn = document.querySelector("#decreasebtn")

increaseBtn.addEventListener("click",increaseNumber)
decreaseBtn.addEventListener("click",decreaseNumber )
increaseText = 16



function increaseNumber () {


    counterText.innerText = Number(counterText.innerText) + 1 ;
    counterText.style.fontSize = `${increaseText += 4 }px `
}

function decreaseNumber (){
    counterText.innerText = Number(counterText.innerText) - 1 


}



