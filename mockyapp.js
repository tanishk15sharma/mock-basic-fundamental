const fetchBtn = document.querySelector("#fetch-btn")
const outputText = document.querySelector("#output-text")

fetchBtn.addEventListener("click",errorFetcher)

var URL = "https://mystery-api.kushanksriraj.repl.co/get"


function errorFetcher() {
    fetch(URL)
    .then(
        response => {
            if(response.status === 404 ){
                outputText.innerText = "page not found "
                
            }else if (response.status === 401 ){
                outputText.innerText = "not logged in "
            }
            else {
                outputText.innerText = "successful"
            }
        }
    )
}