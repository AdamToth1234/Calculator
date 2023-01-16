const form = document.getElementById("form")
const input = document.getElementById("input")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("fasz")
})

function Add(value){
    input.value += value
}