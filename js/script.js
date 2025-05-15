const input__senai = document.querySelector("#input__senai")
const microphone__icon = document.querySelector("#microphone")
const send__icon = document.querySelector("#send")
const button__senai = document.querySelector("#button__senai")
function message () {
        send__icon.style.display = "block"
        microphone__icon.style.display = "none"
}
function microphone () {
       microphone__icon.style.display = "block"
        send__icon.style.display = "none"
}
input__senai.addEventListener("input",()=>{
    if(input__senai.value.trim() ==""){
        microphone()
    }else{
        message()   
    }
})
button__senai.appendChild(icone)