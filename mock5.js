// here is an API that returns a quote. fetch a quote and display it on the web page on the click of a button.

//Follow Up: create a css variable for colour. change the background colour of the quote using the variable


const fetchBtn = document.querySelector("#fetch-btn")
const outputShow = document.querySelector("#show-output")

fetchBtn.addEventListener("click", callAPI)

var URL = "https://api.kanye.rest/ "

function callAPI() {
    fetch(URL)
        .then(quotedisplay => quotedisplay.json())
        .then(quotedisplay => {
            quotedisplay.quote

            outputShow.innerText = quotedisplay.quote;

        })
}