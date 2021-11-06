const leftBtn = document.querySelector("#leftbtn")
const rightBtn = document.querySelector("#rightbtn")
const centreBtn = document.querySelector("#centrebtn")
const textHtml = document.querySelector("#text-html")

leftBtn.addEventListener("click",shiftleft  )
rightBtn.addEventListener("click",shiftright  )
centreBtn.addEventListener("click",shiftcentre  )





function shiftleft  () {
    textHtml.style.textAlign = "left"

}
function shiftright  () {
    textHtml.style.textAlign = "right"

}function shiftcentre  () {
    textHtml.style.textAlign = "center"

}
