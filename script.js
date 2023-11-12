
let form = document.querySelector("#contact")
let gradient = document.querySelector("#gradient-form")

function showForm() {
    form.style.left = "600px"
    gradient.style.visibility = "visible"
}

function outForm() {
    form.style.left = "-400px"
    gradient.style.visibility = "hidden"
}
