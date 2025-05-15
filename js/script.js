const input__senai = document.querySelector("#input__senai")
const microphone__icon = document.querySelector("#microphone")
const send__icon = document.querySelector("#send")
const button__senai = document.querySelector("#button__senai")
const bot__senai = document.querySelector("#bot__senai")
function bot__conversa(texto) {
  const utterance = new SpeechSynthesisUtterance(texto);
  speechSynthesis.speak(utterance);
}


function message () {
        send__icon.style.display = "block"
        microphone__icon.style.display = "none"
}
function audio () {
       microphone__icon.style.display = "block"
       send__icon.style.display = "none"
}
input__senai.addEventListener("input",()=>{
    if(input__senai.value.trim() ==""){
        audio()
    }else{
        message()   
    }
})
microphone__icon.addEventListener("click",()=>{
    bot__conversa(bot__senai.textContent)
})
